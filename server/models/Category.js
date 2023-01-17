const mongoose = require("mongoose");

const { Schema } = mongoose;

// Schemas define the shape of the documents within the collection.
const categorySchema = new Schema({
  // Schemas define the properties of the document
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

// Create model using mongoose.model()
const Category = mongoose.model("Category", categorySchema);

// Export model
module.exports = Category;
