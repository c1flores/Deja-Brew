const mongoose = require('mongoose');

const { Schema } = mongoose;

const drinkSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  customize: {
    type: Schema.Types.ObjectId,
    ref: 'Customize',
  }
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;