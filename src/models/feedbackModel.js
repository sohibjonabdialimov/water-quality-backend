const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: false },
}, { timestamps: true }); 

module.exports = mongoose.model('Feedback', FeedbackSchema);
