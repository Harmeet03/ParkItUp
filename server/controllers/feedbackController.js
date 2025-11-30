import User from "../models/User.js";
import Feedback from "../models/Feedback.js";

export const addFeedback = async (req, res) => {
    try{
        const { message } = req.body;

        const feedback = await Feedback.create({
            user: req.user._id,
            message
        })

        res.status(201).json({
            success: true,
            feedback
        })
    }
    catch(e){
        res.status(500).json({ message: 'Unable to post feedback.' });
        console.error('Unable to post feedback:', e);
    }
}

export const getFeedback = async (req, res) => {
    try{
        const feedbacks = await Feedback.find().populate('user', 'name email')
        res.status(200).json({
            feedbacks
        })
    }
    catch(e){
        res.status(500).json({ message: 'Unable to fetch feedback.' });
        console.error('Unable to fetch feedback:', e);
    }
}