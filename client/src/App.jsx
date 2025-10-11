import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from './pages/Landing'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/User/Dashboard'
import ProtectedRoute from './routes/ProtectedRoute'
import Profile from './pages/User/Profile'
import SlotBooking from './pages/User/SlotBooking'
import History from './pages/User/History'

function App() {
  return (
    <Router>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <Routes>
        <Route path='/' element={
          <Landing/>
        }/>

        <Route path='/sign_in' element={
          <SignIn/>
        }/>

        <Route path='/sign_up' element={
          <SignUp/>
        }/>

        <Route path='/dashboard' element={
          // <ProtectedRoute>
            <Dashboard/>
          // </ProtectedRoute>
        }/>

         <Route path='/profile' element={
          // <ProtectedRoute>
            <Profile/>
          // </ProtectedRoute>
        }/>

        <Route path='/book_slot' element={
          // <ProtectedRoute>
            <SlotBooking/>
          // </ProtectedRoute>
        }/>

        <Route path='/history' element={
          // <ProtectedRoute>
            <History/>
          // </ProtectedRoute>
        }/>
      </Routes>
    </Router>
  )
}

export default App