
import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
    },
    trend: {
        type: Boolean,
        default: false,
    },
    price: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["Family", "Honeymoon", "Premium", "Luxury", "Best Seller"],
    },
}, { timestamps: true });

const Package = mongoose.model("Package", packageSchema);

export default Package;