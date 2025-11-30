import express from 'express'
import { profile } from '../controllers/profileController.js'
import protect from '../middleware/profileAuth.js'

const profileRoutes = express.Router()

profileRoutes.get('/user', protect, profile)

export default profileRoutes