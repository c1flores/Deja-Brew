const mongoose = require("mongoose");

const { Schema } = mongoose;

// Schemas define the shape of the documents within the collection.
const orderSchema = new Schema({
  // Schemas define the properties of the document
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

// Create model using mongoose.model()
const Order = mongoose.model("Order", orderSchema);

// Export model
module.exports = Order;
