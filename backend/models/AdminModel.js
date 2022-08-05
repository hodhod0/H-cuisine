const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:false
    },
    isAdmin:{
        type:Boolean,
        default:true
    },
    facebook:{
        type:String,
        required:false
    },
    aboutus:{
        type:String,
        required:false

    },
    instagram:{
        type:String,
        required:false

    },
    location:{
        type:String,
        required:false

    }

})

const Admin = mongoose.model("Admin",AdminSchema)
module.exports = Admin;