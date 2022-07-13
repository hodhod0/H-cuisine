const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:Array,
        required:true
    },
    extension: String,
    destination: String
    
}, {timestamps:true})

const Category = mongoose.model("Category",CategorySchema )
module.exports = Category