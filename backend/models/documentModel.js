// models/Book.js
// This is the data model / Schema defined with mongoose.js

const mongoose = require('mongoose');

const DocSchema = new mongoose.Schema({
  user: {
    type: String,
    required: false
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = DocModel = mongoose.model('docmodel', DocSchema); 