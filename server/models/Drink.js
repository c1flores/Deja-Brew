const mongoose = require("mongoose");

const { Schema } = mongoose;

// Schemas define the shape of the documents within the collection.
const drinkSchema = new Schema({
  // Schemas define the properties of the document
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  customize: {
    type: Schema.Types.ObjectId,
    ref: "Customize",
  },
});

// Create model using mongoose.model()
const Drink = mongoose.model("Drink", drinkSchema);


// Export model
module.exports = Drink;
