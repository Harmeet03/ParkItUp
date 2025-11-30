import express from 'express'
import { slots, checkout, verify, bookings, stats, booked, unbook } from '../controllers/slotController.js'
import protect from '../middleware/profileAuth.js'
import admin from '../middleware/adminAuth.js'

const slotRoutes = express.Router()

slotRoutes.get('/slots', protect, slots)
slotRoutes.post('/payment/checkout', protect, checkout)
slotRoutes.post('/payment/verify', protect, verify)
slotRoutes.get('/bookings/my', protect, bookings)

slotRoutes.get('/stats', protect, admin, stats)
slotRoutes.get('/booked', protect, admin, booked)
slotRoutes.post('/unbook', protect, admin, unbook)

export default slotRoutes