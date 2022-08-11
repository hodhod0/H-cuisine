const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    date: {
      type: Date,
      required: false,
    },
    totalPrice: {
      type: Number,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      required: false,
    },
    item: [
      {
        id: { type: Schema.Types.ObjectId, ref: "Item", required: true },
        quantity: { type: Number, required: true },
      },
    ],
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
