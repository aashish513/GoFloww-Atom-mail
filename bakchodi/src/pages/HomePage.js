import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                Modern Email for Modern Teams
              </h1>
              <p className="mt-4 text-xl text-gray-500 max-w-3xl">
                MailFlow helps you manage your communications efficiently with a clean, intuitive interface and powerful
                features.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0 md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Email Dashboard Preview"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Features that make email better</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Schedule Sending</h3>
              <p className="mt-2 text-gray-600">Send emails at the perfect time with our scheduling feature.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Enhanced Security</h3>
              <p className="mt-2 text-gray-600">Your emails are protected with industry-leading security measures.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Rich Text Editor</h3>
              <p className="mt-2 text-gray-600">Create beautiful emails with our intuitive rich text editor.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 MailFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

