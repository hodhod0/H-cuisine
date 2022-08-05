const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    date:{
        type:Date,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    item: [{
        type: Schema.Types.ObjectId,
        ref: "Item",
        required: true
    }]
},{timestamps:true})

const Order = mongoose.model("Order",OrderSchema )
module.exports = Order;