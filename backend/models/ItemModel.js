const { Schema, model } = require("mongoose");

const ItemSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required:true
        },
        image:{
           type: Array,
           required:true
        },


        
        price: {
            type: Number,
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        order: [{
            type: Schema.Types.ObjectId,
            ref: "Order",
            required: true
        }]
    },
    {
        collection: "items",
        timestamps: true
    }
);

const Item = model("Item", ItemSchema);
module.exports = Item;