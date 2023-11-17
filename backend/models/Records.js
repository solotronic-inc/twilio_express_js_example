// models/Records.js
// This is the data model / Schema defined with mongoose.js

const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  user: {
    type: String,
    required: false
  },
  number: {
    type: Number,
    required: false
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

// 'record' is a single docuemnt in Records ???
module.exports = Records = mongoose.model('record', RecordSchema); 