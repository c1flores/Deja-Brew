const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
