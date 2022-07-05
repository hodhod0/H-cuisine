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
        image:String,
        extension: String,
        destination: String
        ,
        price: {
            type: Number,
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true
        }
    },
    {
        collection: "items",
        timestamps: true
    }
);

const Item = model("Item", ItemSchema);
module.exports = Item;