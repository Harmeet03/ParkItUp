import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 500
        }
    }, 
    
    {
        timestamps: true 
    }
);

export default mongoose.model("Feedback", feedbackSchema);