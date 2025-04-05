<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardLayout from "./layouts/DashboardLayout";
import ComposePage from "./pages/ComposePage";
import InboxPage from "./pages/InboxPage";
import ContactsPage from "./pages/ContactsPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import DashboardLayout from "./layouts/DashboardLayout"
import ComposePage from "./pages/ComposePage"
import InboxPage from "./pages/InboxPage"
import ContactsPage from "./pages/ContactsPage"
import SettingsPage from "./pages/SettingsPage"
import AboutPage from "./pages/AboutPage"
import ProtectedRoute from "./components/ProtectedRoute"
import "./index.css"
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
<<<<<<< HEAD
          <Route path="/dashboard" element={<DashboardLayout />}>
=======
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
            <Route index element={<Navigate to="/dashboard/inbox" replace />} />
            <Route path="compose" element={<ComposePage />} />
            <Route path="inbox" element={<InboxPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
<<<<<<< HEAD
  );
}

export default App;
=======
  )
}

export default App

>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
