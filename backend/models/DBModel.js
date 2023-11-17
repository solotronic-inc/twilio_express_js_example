// models/Book.js
// This is the data model / Schema defined with mongoose.js

const mongoose = require('mongoose');

const DBSchema = new mongoose.Schema({
  user: {
    type: String,
    required: false
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = DBModel = mongoose.model('dbmodel', DBSchema); 