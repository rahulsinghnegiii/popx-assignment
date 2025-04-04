import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AccountSettings from './pages/AccountSettings'

// Components
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
