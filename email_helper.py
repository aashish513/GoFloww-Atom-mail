import imaplib
import email
from email.header import decode_header
from email.utils import parsedate_to_datetime
from collections import defaultdict
from datetime import datetime, timezone
from flask import Flask, request, jsonify
DEFAULT_IMAP_SERVER = "imap.gmail.com"  # Replace with dynamic if needed

# IMAP Configuration

# Store sessions: secret_key -> { email, password }
sessions = {}

app = Flask(__name__)

@app.route('/api/login_email', methods=['POST'])
def login_email():
    data = request.get_json()
    email_ = data.get("email")
    password_ = data.get("password")

    if not email_ or not password_:
        return jsonify({"error": "Email and password are required."}), 400

    # Try to login to email using IMAP
    try:
        mail = imaplib.IMAP4_SSL(DEFAULT_IMAP_SERVER)
        mail.login(email_, password_)
        mail.logout()
    except imaplib.IMAP4.error:
        return jsonify({"error": "Invalid credentials or login failed."}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    # Generate session key
    secret_key = str(uuid.uuid4())
    sessions[secret_key] = {
        "email": email_,
        "password": password_
    }

    return jsonify({"secret_key": secret_key}), 200

def clean_subject(subject):
    subject = subject.lower()
    for prefix in ["re:", "fwd:", "fw:"]:
        subject = subject.replace(prefix, "").strip()
    return subject

def fetch_email_thread(EMAIL_ACCOUNT, EMAIL_PASSWORD, offset=0, limit=10):
    print(f"1. fetching email offset:{offset} limit:{limit} ")
    mail = imaplib.IMAP4_SSL(IMAP_SERVER)
    mail.login(EMAIL_ACCOUNT, EMAIL_PASSWORD)
    mail.select("inbox")
    print(f"fetching email offset:{offset} limit:{limit} ")

    _, data = mail.search(None, 'ALL')
    msg_ids = data[0].split()

    threads = defaultdict(list)

    for msg_id in reversed(msg_ids):  # Start from newest
        _, msg_data = mail.fetch(msg_id, "(RFC822)")
        raw_email = msg_data[0][1]
        msg = email.message_from_bytes(raw_email)

        # Decode subject
        subject, encoding = decode_header(msg.get("Subject"))[0]
        if isinstance(subject, bytes):
            subject = subject.decode(encoding or "utf-8", errors="ignore")
        subject_key = clean_subject(subject)

        from_ = msg.get("From")
        to_ = msg.get("To")
        date_ = msg.get("Date")

        try:
            parsed_date = parsedate_to_datetime(date_)
            if parsed_date.tzinfo is None:
                parsed_date = parsed_date.replace(tzinfo=timezone.utc)
        except:
            parsed_date = datetime.now(timezone.utc)

        # Extract body
        body = ""
        if msg.is_multipart():
            for part in msg.walk():
                if part.get_content_type() == "text/plain" and not part.get("Content-Disposition"):
                    body = part.get_payload(decode=True).decode(errors="ignore")
                    break
        else:
            body = msg.get_payload(decode=True).decode(errors="ignore")

        # Determine conversation partner
        contact = from_ if EMAIL_ACCOUNT not in from_ else to_
        thread_key = (subject_key, contact)

        # Append message info
        threads[thread_key].append({
            "from": from_,
            "to": to_,
            "title": subject,
            "email_body": body.strip(),
            "date": parsed_date.strftime("%Y-%m-%d %H:%M:%S"),
            "datetime": parsed_date  # Internal only, can remove from final return if not needed
        })

    mail.logout()

    # Sort threads by latest message time
    sorted_threads = sorted(
        threads.values(),
        key=lambda msgs: max(m["datetime"] for m in msgs),
        reverse=True
    )

    # Apply offset + limit
    selected_threads = sorted_threads[offset:offset + limit]

    # Sort messages in each thread by datetime and remove 'datetime' if not needed
    final_threads = []
    for thread_msgs in selected_threads:
        thread_msgs_sorted = sorted(thread_msgs, key=lambda m: m["datetime"])
        for msg in thread_msgs_sorted:
            del msg["datetime"]  # Remove internal field
        final_threads.append(thread_msgs_sorted)

    return final_threads


@app.route('/api/email_threads', methods=['GET'])
def get_email_threads():
    print("her1")
    secret_key = request.args.get("secret_key")
    offset = int(request.args.get("offset", 0))
    limit = int(request.args.get("limit", 10))

    session = sessions.get(secret_key)
    if not session:
        return jsonify({"error": "Invalid or expired session key."}), 401

    email = session["email"]
    password = session["password"]

    try:
        offset = int(request.args.get("offset", 0))
        limit = int(request.args.get("limit", 10))
    except:
        return jsonify({"error": "offset and limit must be integers"}), 400

    threads = fetch_email_thread(email=email, password=password, offset=offset, limit=limit)
    return jsonify(threads), 200


@app.route('/', methods=['GET'])
def is_running():
    return jsonify({"status": "server running"}), 200



if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5001, debug=True, threaded=True)
