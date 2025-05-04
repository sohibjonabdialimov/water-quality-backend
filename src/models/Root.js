const mongoose = require('mongoose');

const RootSchema = new mongoose.Schema({
  temperature: { type: String, required: true },
  tds: { type: String, required: true },
  waterLevel: { type: String, required: true },
}, { timestamps: true }); 

module.exports = mongoose.model('Root', RootSchema);
