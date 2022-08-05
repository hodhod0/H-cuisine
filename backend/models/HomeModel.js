const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    // title:{
    //     type:String,
    //     required:true
    // },
    image:{
        type:Array,
        required:true
    },
    // video:{
    //     type:String,
    //     required:true
    // },
    // videoLink:{
    //     type:String,
    //     required:true
    // }

    
}, {timestamps:true})

const Category = mongoose.model("Home",HomeSchema )
module.exports = Category