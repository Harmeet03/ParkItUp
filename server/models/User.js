import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        
        email: {
            type: String,
            required: true,
            unique: true
        },

        username: {
            type: String,
            required: true,
            unique: true
        },
        
        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },

        bookedSlots: [
            {
                slot: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Slot",
                    required: true
                },

                time: {
                    type: Date,
                    default: Date.now
                }
            }
        ],

        feedbacks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Feedback"
            }
        ]
    }, 
    
    {
        timestamps: true 
    }
);

export default mongoose.model("User", userSchema);