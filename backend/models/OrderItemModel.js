const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
    quantity:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        require:true
    }
})

const OrderItem = mongoose.model("OrderItem", OrderItemSchema);
module.exports = OrderItem;