const mongoose = require("mongoose");

const { Schema } = mongoose;

const customizeSchema = new Schema({
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

const Customize = mongoose.model("Customize", customizeSchema);

module.exports = Customize;
