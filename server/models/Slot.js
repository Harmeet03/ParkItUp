import mongoose from "mongoose";

const slotSchema = new mongoose.Schema(
    {
        slotNumber: {
            type: Number,
            required: true,
            unique: true,      // ensures you have one document per slot (1–9)
            min: 1,
            max: 9
        },

        isBooked: {
            type: Boolean,
            default: false    // false by default (available)
        },

        bookedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null      // null when slot is free
        },

        bookedAt: {
            type: Date,
            default: null
        }
    },
    
    {
        timestamps: true 
    }
)

export default mongoose.model("Slot", slotSchema);