"use client"

import { createContext, useState, useContext, useEffect } from "react"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Simulate checking for a stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Simulate login functionality
  const login = (email, password) => {
    // In a real app, this would make an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const user = { email, name: email.split("@")[0] }
          setCurrentUser(user)
          localStorage.setItem("user", JSON.stringify(user))
          resolve(user)
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  }

  // Simulate signup functionality
  const signup = (email, password, name) => {
    // In a real app, this would make an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const user = { email, name: name || email.split("@")[0] }
          setCurrentUser(user)
          localStorage.setItem("user", JSON.stringify(user))
          resolve(user)
        } else {
          reject(new Error("Invalid information"))
        }
      }, 1000)
    })
  }

  // Logout functionality
  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem("user")
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

