import React, { useContext, useState } from 'react'
import Dashboard from './components/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import { Routes, Route, Navigate } from "react-router";
import { MyStore } from './Context/MyContext';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("Users")) || [])
  const { user } = useContext(MyStore)

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111]">
      <Routes>
        <Route
          path='/register'
          element={user ? <Navigate to="/" replace /> : <Register setUsers={setUsers} users={users} />}
        />
        <Route
          path='/login'
          element={user ? <Navigate to="/" replace /> : <Login setUsers={setUsers} users={users} />}
        />
        <Route
          path='/*'
          element={user ? <Dashboard /> : <Navigate to="/login" replace />}
        />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000} theme="light" />
    </div>
  )
}

export default App