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

    },
    password: {
        type: String,
        required:true,
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