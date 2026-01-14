import {Schema, model} from "mongoose";

const sellerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    role: {
        type: String,
        default: "seller"
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    paymentInfo: {
        type: String,
        default: "inactive"
    },
    shopInfo: {
        type: String,
        default: "inactive"
    },
    method: {
        type: String,
        required: true
    }
}, {timestamps: true});

sellerSchema.index({
    name: "text", 
    email: "text"},
    {
        weights: {
            name: 5,
            email: 4
        }
    }
);

const Seller  = model("Sellers", sellerSchema);
export default Seller;