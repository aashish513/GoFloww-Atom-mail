"use client"

import { useState, useEffect } from "react"
import { Inbox, Star, Clock, Send, Trash, Archive, Tag, AlertCircle, Mail } from "lucide-react"

// Mock email data
const mockEmails = [
  {
    id: 1,
    from: "team@company.com",
    subject: "Welcome to MailFlow!",
    content: "Thank you for signing up for MailFlow. We hope you enjoy using our platform.",
    date: "2025-04-05T10:30:00",
    read: false,
    starred: true,
  },
  {
    id: 2,
    from: "notifications@service.com",
    subject: "Your account has been verified",
    content: "Your account has been successfully verified. You can now access all features.",
    date: "2025-04-04T15:45:00",
    read: true,
    starred: false,
  },
  {
    id: 3,
    from: "newsletter@tech.com",
    subject: "This Week in Tech: Latest Updates",
    content: "Check out the latest tech news and updates from around the world.",
    date: "2025-04-03T08:15:00",
    read: true,
    starred: false,
  },
  {
    id: 4,
    from: "support@platform.com",
    subject: "Your support ticket #12345",
    content: "We have received your support ticket and will get back to you shortly.",
    date: "2025-04-02T14:20:00",
    read: false,
    starred: false,
  },
  {
    id: 5,
    from: "marketing@store.com",
    subject: "Special Offer: 25% off all products",
    content: "For a limited time, enjoy 25% off all products in our store.",
    date: "2025-04-01T11:10:00",
    read: true,
    starred: true,
  },
]

function InboxPage() {
  const [emails, setEmails] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [activeTab, setActiveTab] = useState("inbox")

  useEffect(() => {
    // Simulate API call to fetch emails
    const fetchEmails = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setEmails(mockEmails)
        setLoading(false)
      } catch (error) {
        setError("Failed to load emails. Please try again later.")
        setLoading(false)
      }
    }

    fetchEmails()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const handleEmailClick = (email) => {
    setSelectedEmail(email)

    // Mark as read if unread
    if (!email.read) {
      setEmails(emails.map((e) => (e.id === email.id ? { ...e, read: true } : e)))
    }
  }

  const toggleStar = (emailId, e) => {
    e.stopPropagation()
    setEmails(emails.map((email) => (email.id === emailId ? { ...email, starred: !email.starred } : email)))
  }

  const filteredEmails = () => {
    switch (activeTab) {
      case "starred":
        return emails.filter((email) => email.starred)
      case "sent":
        return [] // In a real app, this would be sent emails
      case "drafts":
        return [] // In a real app, this would be draft emails
      case "trash":
        return [] // In a real app, this would be deleted emails
      default:
        return emails
    }
  }

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col">
      <div className="flex flex-col md:flex-row h-full">
<<<<<<< HEAD
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-100 p-4 space-y-2">
          <button
            onClick={() => setActiveTab("inbox")}
            className={`flex items-center w-full p-2 rounded-md ${
              activeTab === "inbox"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-200"
            }`}
=======
        {/* Email categories */}
        <div className="w-full md:w-64 bg-gray-100 p-4 space-y-2">
          <button
            onClick={() => setActiveTab("inbox")}
            className={`flex items-center w-full p-2 rounded-md ${activeTab === "inbox" ? "bg-purple-100 text-purple-700" : "hover:bg-gray-200"}`}
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
          >
            <Inbox size={18} className="mr-2" />
            <span>Inbox</span>
            <span className="ml-auto bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
              {emails.filter((e) => !e.read).length}
            </span>
          </button>
<<<<<<< HEAD
          <button
            onClick={() => setActiveTab("starred")}
            className={`flex items-center w-full p-2 rounded-md ${
              activeTab === "starred"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-200"
            }`}
=======

          <button
            onClick={() => setActiveTab("starred")}
            className={`flex items-center w-full p-2 rounded-md ${activeTab === "starred" ? "bg-purple-100 text-purple-700" : "hover:bg-gray-200"}`}
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
          >
            <Star size={18} className="mr-2" />
            <span>Starred</span>
          </button>
<<<<<<< HEAD
          <button
            onClick={() => setActiveTab("sent")}
            className={`flex items-center w-full p-2 rounded-md ${
              activeTab === "sent"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-200"
            }`}
=======

          <button
            onClick={() => setActiveTab("sent")}
            className={`flex items-center w-full p-2 rounded-md ${activeTab === "sent" ? "bg-purple-100 text-purple-700" : "hover:bg-gray-200"}`}
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
          >
            <Send size={18} className="mr-2" />
            <span>Sent</span>
          </button>
<<<<<<< HEAD
          <button
            onClick={() => setActiveTab("drafts")}
            className={`flex items-center w-full p-2 rounded-md ${
              activeTab === "drafts"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-200"
            }`}
=======

          <button
            onClick={() => setActiveTab("drafts")}
            className={`flex items-center w-full p-2 rounded-md ${activeTab === "drafts" ? "bg-purple-100 text-purple-700" : "hover:bg-gray-200"}`}
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
          >
            <Clock size={18} className="mr-2" />
            <span>Drafts</span>
          </button>
<<<<<<< HEAD
          <button
            onClick={() => setActiveTab("trash")}
            className={`flex items-center w-full p-2 rounded-md ${
              activeTab === "trash"
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-200"
            }`}
=======

          <button
            onClick={() => setActiveTab("trash")}
            className={`flex items-center w-full p-2 rounded-md ${activeTab === "trash" ? "bg-purple-100 text-purple-700" : "hover:bg-gray-200"}`}
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
          >
            <Trash size={18} className="mr-2" />
            <span>Trash</span>
          </button>
<<<<<<< HEAD
        </div>

        {/* Threads List */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
=======

          <div className="pt-4">
            <div className="text-sm font-medium text-gray-500 mb-2">Filter</div>
            <button className="flex items-center w-full p-2 rounded-md hover:bg-gray-200">
              <Tag size={18} className="mr-2 text-red-500" />
              <span>Product Query</span>
            </button>
            <button className="flex items-center w-full p-2 rounded-md hover:bg-gray-200">
              <Tag size={18} className="mr-2 text-blue-500" />
              <span>Feedback</span>
            </button>
            <button className="flex items-center w-full p-2 rounded-md hover:bg-gray-200">
              <Tag size={18} className="mr-2 text-green-500" />
              <span>Complain</span>
            </button>
          </div>
        </div>

        {/* Email list and content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Email list */}
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
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
