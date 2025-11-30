import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

// NETWORK STATUS PAGE
import NetworkStatus from './components/NetworkStatus'

// PUBLIC PAGES
import Landing from './pages/Landing'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import ProtectedRoute from './routes/ProtectedRoute'
import PublicRoute from './routes/PublicRoute'
import AdminRoute from './routes/AdminRoute'

import NotFound from './pages/NotFound'

// USER PAGES
import Dashboard from './pages/User/Dashboard'
import Profile from './pages/User/Profile'
import SlotBooking from './pages/User/SlotBooking'
import History from './pages/User/History'
import Success from './pages/User/Status/Success'
import Failed from './pages/User/Status/Failed'
import Chat from './pages/Chat'
import Feedback from './pages/User/Feedback'

// ADMIN PAGES
import AdminDashboard from './pages/Admin/Dashboard'
import Bookings from './pages/Admin/Bookings'
import Users from './pages/Admin/Users'
import Reports from './pages/Admin/Reports'
import Slots from './pages/Admin/Slots'

function App() {
  return (
    <Router>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <NetworkStatus/>

      <Routes>

        {/* PUBLIC LINKS */}
        <Route path='/' element={
          <PublicRoute>
            <Landing/>
          </PublicRoute>
        }/>

        <Route path='/sign_in' element={
          <PublicRoute>
            <SignIn/>
          </PublicRoute>
        }/>

        <Route path='/sign_up' element={
          <PublicRoute>
            <SignUp/>
          </PublicRoute>
        }/>

        <Route path='/chat' element={
            <Chat/>
        }/>

        {/* USER ONLY LINKS */}
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>

         <Route path='/profile' element={
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        }/>

        <Route path='/book_slot' element={
          <ProtectedRoute>
            <SlotBooking/>
          </ProtectedRoute>
        }/>

        <Route path='/history' element={
          <ProtectedRoute>
            <History/>
          </ProtectedRoute>
        }/>

        <Route path='/success' element={
          <ProtectedRoute>
            <Success/>
          </ProtectedRoute>
        }/>

        <Route path='/failed' element={
          <ProtectedRoute>
            <Failed/>
          </ProtectedRoute>
        }/>

        <Route path='/feedback' element={
          <ProtectedRoute>
            <Feedback/>
          </ProtectedRoute>
        }/>

        {/* ADMIN ONLY LINKS */}
        <Route path='/admin/dashboard' element={
          <AdminRoute>
            <AdminDashboard/>
          </AdminRoute>
        }/>
        
        <Route path='/admin/slots' element={
          <AdminRoute>
            <Slots/>
          </AdminRoute>
        }/>

        <Route path='/admin/bookings' element={
          <AdminRoute>
            <Bookings/>
          </AdminRoute>
        }/>

        <Route path='/admin/users' element={
          <AdminRoute>
            <Users/>
          </AdminRoute>
        }/>

        <Route path='/admin/reports' element={
          <AdminRoute>
            <Reports/>
          </AdminRoute>
        }/>

        <Route path='*' element={
          <NotFound/>
        }/>

      </Routes>
    </Router>
  )
}

export default App