"use client"

import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import {
  Save,
  Paperclip,
  Pen,
  MessageSquare,
  Calendar,
  Send,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  MoreHorizontal,
} from "lucide-react"

function ComposePage() {
  const { currentUser } = useAuth()
  const [from, setFrom] = useState(currentUser?.email || "")
  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [showSchedule, setShowSchedule] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSend = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate sending email
    setTimeout(() => {
      alert("Email sent successfully!")
      setTo("")
      setSubject("")
      setContent("")
      setLoading(false)
    }, 1500)
  }

  const handleScheduleSend = (date) => {
    setShowSchedule(false)
    alert(`Email scheduled for ${date}`)
  }

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-800 text-white rounded-t-lg">
        <div className="flex space-x-4">
          <button className="p-2 rounded hover:bg-gray-700">
            <Save size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-700">
            <Paperclip size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-700">
            <Pen size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-700">
            <MessageSquare size={20} />
          </button>
        </div>
        <div>
          <button className="p-2 rounded hover:bg-gray-700" onClick={() => setShowSchedule(!showSchedule)}>
            <Calendar size={20} />
          </button>
        </div>
      </div>

      <form onSubmit={handleSend} className="p-4">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="w-20 text-gray-700 font-medium">From</label>
            <input
              type="email"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded mt-1 sm:mt-0"
              readOnly
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="w-20 text-gray-700 font-medium">To</label>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded mt-1 sm:mt-0"
              placeholder="recipient@example.com"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="w-20 text-gray-700 font-medium">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded mt-1 sm:mt-0"
              placeholder="Email subject"
              required
            />
          </div>

          <div>
            <div className="editor-toolbar">
              <button type="button" className="editor-toolbar-button">
                <Bold size={18} />
              </button>
              <button type="button" className="editor-toolbar-button">
                <Italic size={18} />
              </button>
              <button type="button" className="editor-toolbar-button">
                <Underline size={18} />
              </button>
              <span className="mx-1 text-gray-300">|</span>
              <button type="button" className="editor-toolbar-button">
                <AlignLeft size={18} />
              </button>
              <button type="button" className="editor-toolbar-button">
                <AlignCenter size={18} />
              </button>
              <button type="button" className="editor-toolbar-button">
                <AlignRight size={18} />
              </button>
              <span className="mx-1 text-gray-300">|</span>
              <button type="button" className="editor-toolbar-button">
                <List size={18} />
              </button>
              <button type="button" className="editor-toolbar-button">
                <ListOrdered size={18} />
              </button>
              <span className="mx-1 text-gray-300">|</span>
              <select className="p-1 text-sm border border-gray-300 rounded">
                <option>Verdana</option>
                <option>Arial</option>
                <option>Times New Roman</option>
                <option>Courier New</option>
              </select>
              <select className="p-1 text-sm border border-gray-300 rounded ml-2">
                <option>10pt</option>
                <option>12pt</option>
                <option>14pt</option>
                <option>16pt</option>
                <option>18pt</option>
              </select>
              <button type="button" className="editor-toolbar-button ml-auto">
                <MoreHorizontal size={18} />
              </button>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="rich-text-editor w-full"
              rows={10}
              placeholder="Compose your email here..."
              required
            />
          </div>

          {showSchedule && (
            <div className="absolute right-8 bg-white border border-gray-200 rounded-md shadow-lg p-4 z-10">
              <div className="text-sm font-medium mb-2">Schedule send</div>
              <div className="text-xs text-gray-500 mb-2">India Standard Time</div>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleScheduleSend("Tomorrow morning November 18, 2024, 08:00 AM")}
                  className="w-full text-left p-2 text-sm hover:bg-gray-100 rounded"
                >
                  Tomorrow morning November 18, 2024, 08:00 AM
                </button>
                <button
                  type="button"
                  onClick={() => handleScheduleSend("Tomorrow afternoon November 17, 2024, 01:00 PM")}
                  className="w-full text-left p-2 text-sm hover:bg-gray-100 rounded"
                >
                  Tomorrow afternoon November 17, 2024, 01:00 PM
                </button>
                <button
                  type="button"
                  onClick={() => handleScheduleSend("Monday morning November 18, 2024, 08:00 AM")}
                  className="w-full text-left p-2 text-sm hover:bg-gray-100 rounded"
                >
                  Monday morning November 18, 2024, 08:00 AM
                </button>
                <div className="text-sm text-gray-600 mt-2">Select date and time</div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-4">
            <div className="flex space-x-2">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
              >
                <Send size={16} className="mr-2" />
                {loading ? "Sending..." : "Send"}
              </button>
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                AI draft
              </button>
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() => setShowSchedule(!showSchedule)}
              >
                Schedule Send
              </button>
            </div>
            <button type="button" className="px-4 py-2 text-gray-700 rounded hover:bg-gray-200">
              Open in new
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ComposePage

