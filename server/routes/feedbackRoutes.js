import express from 'express'
import { addFeedback, getFeedback } from '../controllers/feedbackController.js'
import protect from '../middleware/profileAuth.js'
import admin from '../middleware/adminAuth.js'

const feedbackRoutes = express.Router()

feedbackRoutes.post('/add', protect, addFeedback)
feedbackRoutes.get('/', protect, admin, getFeedback)

export default feedbackRoutes