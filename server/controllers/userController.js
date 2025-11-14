import Slot from "../models/Slot.js";
import User from "../models/User.js";

export const users = async (req, res) => {
    try{
        const users = await User.find({}).select('name email username')

        if(!users){
            console.log('No user yet')
            return res.status(400).json({
                success: false,
                message: 'No user yet'
            })
        }

        res.status(200).json({
            success: true,
            all_users: users
        })
    }
    catch(e){
        res.status(500).json({ success: false, message: 'Unable to fetch all users' })
        console.log('Unable to fetch all users')
    }
}

export const allBookings = async (req, res) => {
    try{
        const bookings = await User.find({}).populate('bookedSlots.slot', 'slotNumber').select('username bookedSlots')

        if(!bookings){
            return res.status(400).json({
                success: false,
                message: 'No bookings yet'
            })
        }

        res.status(200).json({
            success: true,
            all_bookings: bookings
        })
    }
    catch(e){
        res.status(500).json({ success: false,  message: 'Unable to fetch all users and their bookings' })
        console.log('Unable to fetch all users and their bookings')
    }
} 