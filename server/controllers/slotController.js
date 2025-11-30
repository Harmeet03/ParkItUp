import Slot from "../models/Slot.js";
import User from "../models/User.js";
import Stats from "../models/Stats.js"

import Razorpay from "razorpay";
import crypto from "crypto";

export const slots = async (req, res) => {
    try{
        const allSlots = await Slot.find({});
        res.status(200).json(allSlots);
        console.log('Fetched all slots successfully.');
    }
    catch(e){
        res.status(500).json({ message: 'Server error fetching slots.' });
        console.log('Error fetching slots:', e);
    }
}

export const checkout = async (req, res) => {
    try{
        const { slotId } = req.body;

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        })

        const options = {
            amount: 100 * 100,
            currency: 'INR',
            notes: { slotId, localRecieptId: `receipt_${Date.now()}` }  
        }

        const order = await razorpay.orders.create(options);

        res.status(200).json({
            success: true,    
            key: process.env.RAZORPAY_KEY_ID,
            order
        });
    }
    catch(e){
        res.status(500).json({ message: 'Server error during checkout.' });
        console.log('Error during checkout:', e);
    }
}

export const verify = async (req, res) => {
    try{
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, slotId } = req.body;

        const sign = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                           .update(razorpay_order_id + "|" + razorpay_payment_id)
                           .digest('hex');
        
        if(sign === razorpay_signature){
            const userId = req.user._id;
            
            await Slot.findByIdAndUpdate(slotId, {
                isBooked: true,
                bookedBy: userId,
                bookedAt: new Date()
            })

            await User.findByIdAndUpdate(userId, {
                $push: { 
                    bookedSlots: {
                        slot: slotId,
                        time: new Date()
                    }
                }
            })

            await Stats.updateOne({}, { $inc: { totalRevenue: 100 } }, { upsert: true })

            return res.status(200).json({
                success: true,
                userId: userId,
                message: 'Payment verified and slot booked successfully.'
            })
        }
        else{
            console.log('Payment verification failed due to invalid signature.');
            return res.status(400).json({
                success: false,
                message: 'Invalid signature, payment verification failed.'
            })
        }
    }
    catch(e){
        res.status(500).json({ message: 'Server error during payment verification.' });
        console.log('Error during payment verification:', e);
    }
}

export const bookings = async (req, res) => {
    try{
        const userId = req.user._id;
        const user = await User.findById(userId).populate('bookedSlots.slot', 'slotNumber')

        return res.status(200).json({
            success: true,
            bookings: user.bookedSlots
        })
    }
    catch(e){
        res.status(500).json({ message: 'Server error fetching bookings.' });
        console.log('Error fetching bookings:', e);
    }
}

export const stats = async (req, res) => {
    try{
        const totalSlots = await Slot.countDocuments();
        const bookedSlots = await Slot.countDocuments({ isBooked: true });
        const availableSlots = totalSlots - bookedSlots

        const revenueStats = await Stats.findOne()
        const totalRevenue = revenueStats ? revenueStats.totalRevenue : 0

        res.status(200).json({
            success: true,
            totalSlots,
            bookedSlots,
            availableSlots,
            totalRevenue
        })
    }
    catch(e){
        res.status(500).json({ message: 'Server error fetching booking stats' })
        console.log('Error fetching booking stats', e)
    }
}

export const booked = async (req, res) => {
    try{
        const bookedSlots = await Slot.find({ isBooked: true }).populate('bookedBy', 'username')
        res.status(200).json({
            success: true,
            bookedSlots
        })
    }
    catch(e){
        res.status(500).json({ message: 'Server error fetching booked slots' })
        console.log('Error fetching booked slots', e)
    }
}

export const unbook = async (req, res) => {
    try{
        const { slotId } = req.body
        await Slot.findByIdAndUpdate(slotId, { 
            $set: { 
                isBooked: false, 
                bookedBy: null, 
                bookedAt: null 
            },
        }, 
        { new: true })

        res.json({ message: 'Slots unbooked successfully' })

    }
    catch(e){
        res.status(500).json({ message: 'Unable to unbook slot' })
        console.log('Unable to unbook slot', e)
    }
}