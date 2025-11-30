import mongoose from "mongoose";

const statSchema = new mongoose.Schema(
    {
        totalRevenue: {
            type: Number,
            default: 0
        }
    }
);

export default mongoose.model("Stats", statSchema);