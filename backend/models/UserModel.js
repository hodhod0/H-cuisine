const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true

    },
    password: {
        type: String,
        minlength: 6,
        required:[true,"Please enter your password"],
    },
    phone: {
        type:Number,
        required:true,
    },
    address: {
        type:String,
        required:true
    }
}, {timestamps:true})

const User = mongoose.model("User",UserSchema);
module.exports = User;