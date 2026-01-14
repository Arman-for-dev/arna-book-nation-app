import {Schema, model} from "mongoose";

const adminSchema = new Schema({
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
        type: String
    },
    role: {
        type: String,
        default: "admin"
    }
}, {timestamps: true});

const Admin  = model("Admins", adminSchema);

export default Admin;