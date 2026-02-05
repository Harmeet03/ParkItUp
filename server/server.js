import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import database from "./configs/database.js";
import { corsOptions } from './configs/corsOptions.js';
    
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import slotRoutes from './routes/slotRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

console.log("Connecting to MongoDB...");
database()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Welcome to ParkItUp API");
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});
    
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}`);
});

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/slot', slotRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/user', userRoutes)