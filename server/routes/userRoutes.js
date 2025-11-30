import express from 'express'
import protect from '../middleware/profileAuth.js'
import admin from '../middleware/adminAuth.js'
import { users, allBookings } from '../controllers/userController.js'

const userRoutes = express.Router()

userRoutes.get('/all', protect, admin, users)
userRoutes.get('/bookings', protect, admin, allBookings)


export default userRoutes