const mongoose = require('mongoose');

const RootSchema = new mongoose.Schema({
  chuqurlik: { type: String, required: true },
  pH: { type: String, required: true },
  tC: { type: String, required: true },
  eh: { type: String, required: true },
  tds: { type: String, required: true },
}, { timestamps: true }); 

module.exports = mongoose.model('Root', RootSchema);
