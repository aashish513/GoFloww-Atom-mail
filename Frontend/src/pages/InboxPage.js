"use client";

import { useState, useEffect } from "react";
import {
  Inbox,
  Star,
  Clock,
  Send,
  Trash,
  AlertCircle,
  Mail,
} from "lucide-react";

// Mock email data
// const mockEmails = [
//   {
//     id: 1,
//     from: "team@company.com",
//     subject: "Welcome to MailFlow!",
//     content:
//       "Thank you for signing up for MailFlow. We hope you enjoy using our platform.",
//     date: "2025-04-05T10:30:00",
//     read: false,
//     starred: true,
//   },
//   {
//     id: 2,
//     from: "notifications@service.com",
//     subject: "Your account has been verified",
//     content:
//       "Your account has been successfully verified. You can now access all features.",
//     date: "2025-04-04T15:45:00",
//     read: true,
//     starred: false,
//   },
//   {
//     id: 3,
//     from: "newsletter@tech.com",
//     subject: "This Week in Tech: Latest Updates",
//     content:
//       "Check out the latest tech news and updates from around the world.",
//     date: "2025-04-03T08:15:00",
//     read: true,
//     starred: false,
//   },
//   {
//     id: 4,
//     from: "team@company.com",
//     subject: "Welcome to MailFlow!",
//     content: "Let us know if you have any questions.",
//     date: "2025-04-02T14:20:00",
//     read: false,
//     starred: false,
//   },
//   {
//     id: 5,
//     from: "marketing@store.com",
//     subject: "Special Offer: 25% off all products",
//     content: "For a limited time, enjoy 25% off all products in our store.",
//     date: "2025-04-01T11:10:00",
//     read: true,
//     starred: true,
//   },
// ];

function InboxPage() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedThread, setSelectedThread] = useState(null);
  const [activeTab, setActiveTab] = useState("inbox");
  const [replyTo, setReplyTo] = useState(null);
  const [offset, setOffset] = useState(0);
  const limit = 1;

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }
        console.log("token", token)
        const response = await fetch(
          `http://192.168.137.92:5001/api/email_threads?secret_key=${token}&offset=${offset}&limit=${limit}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        
        if (!response.ok) {
          throw new Error("Failed to fetch emails");
        }
        console.log("responce",response);


        const data = await response.json();
        console.log("data is ", data);
        setEmails(data); 
        console.log("ye hai final data", emails)
        setOffset(offset + limit); 
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to load emails. Please try again later.");
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const handleReply = (email) => {
    console.log("Replying to:", email.from);
    // Do something with email.from or email.id etc.
  };

 const groupEmails = () => {
   const grouped = {};

   for (const email of emails) {
     const key = email.conversation_id;
     if (!grouped[key]) grouped[key] = [];
     grouped[key].push(email);
   }

   return Object.entries(grouped)
     .map(([conversation_id, threadEmails]) => {
       const sortedEmails = threadEmails.sort(
         (a, b) => new Date(b.date) - new Date(a.date)
       );
       return {
         threadId: conversation_id,
         from: sortedEmails[0].from,
         subject: sortedEmails[0].subject,
         emails: sortedEmails,
         unreadCount: sortedEmails.filter((e) => !e.read).length,
         starred: sortedEmails.some((e) => e.starred),
         latestDate: sortedEmails[0].date,
       };
     })
     .sort((a, b) => new Date(b.latestDate) - new Date(a.latestDate));
 };


  const handleThreadClick = (thread) => {
    setSelectedThread(thread);
    const updatedEmails = emails.map((e) =>
      thread.emails.find((te) => te.id === e.id) ? { ...e, read: true } : e
    );
    setEmails(updatedEmails);
    setReplyTo(thread.emails[0]); // set the first email in thread for reply
  };

  const toggleStar = (threadId, e) => {
    e.stopPropagation();
    const updatedEmails = emails.map((email) => {
      const key = email.conversation_id;

      if (key === threadId) {
        return { ...email, starred: !email.starred };
      }
      return email;
    });
    setEmails(updatedEmails);
  };

  const filteredThreads = () => {
    const threads = groupEmails();
    switch (activeTab) {
      case "starred":
        return threads.filter((thread) => thread.starred);
      case "sent":
      case "drafts":
      case "trash":
        return [];
      default:
        return threads;
    }
  };

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col">
      <div className="flex flex-col md:flex-row h-full">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-100 p-4 space-y-2">
          <button
            onClick={() => setActiveTab("inbox")}
            className={`flex items-center w-full p-2 rounded-md ${
              activeTab === "inbox"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-200"
            }`}
          >
            <Inbox size={18} className="mr-2" />
            <span>Inbox</span>
            <span className="ml-auto bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
              {emails.filter((e) => !e.read).length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("starred")}
            className={`flex items-center w-full p-2 rounded-md ${
              activeTab === "starred"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-200"
            }`}
          >
            <Star size={18} className="mr-2" />
            <span>Starred</span>
          </button>
          <button
            onClick={() => setActiveTab("sent")}
            className={`flex items-center w-full p-2 rounded-md ${
              activeTab === "sent"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-200"
            }`}
          >
            <Send size={18} className="mr-2" />
            <span>Sent</span>
          </button>
          <button
            onClick={() => setActiveTab("drafts")}
            className={`flex items-center w-full p-2 rounded-md ${
              activeTab === "drafts"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-200"
            }`}
          >
            <Clock size={18} className="mr-2" />
            <span>Drafts</span>
          </button>
          <button
            onClick={() => setActiveTab("trash")}
            className={`flex items-center w-full p-2 rounded-md ${
              activeTab === "trash"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-200"
            }`}
          >
            <Trash size={18} className="mr-2" />
            <span>Trash</span>
          </button>
        </div>

        {/* Threads List */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/3 border-r border-gray-200 overflow-y-auto">
            {loading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-700"></div>
              </div>
            ) : error ? (
              <div className="p-4 text-red-500 flex items-center">
                <AlertCircle size={18} className="mr-2" />
                {error}
              </div>
            ) : filteredThreads().length === 0 ? (
              <div className="p-4 text-gray-500 text-center">
                No emails found
              </div>
            ) : (
              filteredThreads().map((thread) => (
                <div
                  key={thread.threadId}
                  onClick={() => handleThreadClick(thread)}
                  className={`email-card ${
                    thread.unreadCount > 0 ? "email-card-unread" : ""
                  } ${
                    selectedThread?.threadId === thread.threadId
                      ? "bg-purple-50"
                      : ""
                  }`}
                >
                  <div className="flex items-center">
                    <button
                      onClick={(e) => toggleStar(thread.threadId, e)}
                      className="mr-2 text-gray-400 hover:text-yellow-400"
                    >
                      <Star
                        size={18}
                        fill={thread.starred ? "currentColor" : "none"}
                        className={thread.starred ? "text-yellow-400" : ""}
                      />
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="truncate">{thread.from}</p>
                        <p className="text-xs text-gray-500">
                          {formatDate(thread.latestDate)}
                        </p>
                      </div>
                      <p className="truncate font-medium">{thread.subject}</p>
                      <p className="text-sm text-gray-500 truncate">
                        {thread.emails[0].content}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Email Thread View */}
          <div className="flex-1 p-4 overflow-y-auto">
            {selectedThread ? (
              <div>
                <h2 className="text-xl font-bold mb-2">
                  {selectedThread.subject}
                </h2>
                {selectedThread.emails.map((email, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg mb-4 shadow-sm bg-white"
                  >
                    <div className="font-semibold text-gray-800">
                      {email.from}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {email.subject}
                    </div>
                    <div className="text-gray-700 whitespace-pre-line mb-4">
                      {email.content}
                    </div>
                  </div>
                ))}
                <button
                  className="mt-2 text-sm text-black border rounded-3xl px-5 border-black p-2 font-medium hover:underline"
                  onClick={() => handleReply(replyTo)}
                >
                  Reply
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <Mail size={48} strokeWidth={1} />
                <p className="mt-2">Select an email to read</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InboxPage;
