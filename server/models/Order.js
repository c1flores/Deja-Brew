const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  drinks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Drink",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
