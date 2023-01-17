const mongoose = require("mongoose");

const { Schema } = mongoose;

// Schemas define the shape of the documents within the collection.
const customizeSchema = new Schema({
  // Schemas define the properties of the document
  size: {
    type: String,
    default: "Small",
  },
  milk: {
    type: String,
    default: "Milk",
  },
  flavor: {
    type: String,
    default: "None",
  },
});

// Create model using mongoose.model()
const Customize = mongoose.model("Customize", customizeSchema);

// Export model
module.exports = Customize;
