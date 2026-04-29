const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Clothing', 'Food', 'Other'],
  },
  // TODO (Student): Add the missing fields based on the instructions.md
  // 1. description
  // 2. category
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
