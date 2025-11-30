import mongoose from "mongoose";
import Slot from "../models/Slot.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
  .then(async () => {
    console.log("Connected to DB");

    for (let i = 1; i <= 9; i++) {
      await Slot.updateOne(
        { slotNumber: i },
        { $setOnInsert: { slotNumber: i, isBooked: false, bookedBy: null } },
        { upsert: true }
      );
    }

    console.log("9 slots created successfully");
    process.exit();
  })
  .catch(err => console.error("DB connection error:", err));
