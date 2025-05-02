const mongoose = require('mongoose');

const DetailSectionSchema = new mongoose.Schema({
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  youtubeLink: { type: String }
});

const TourismSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  mainImage: { type: String, required: true },
  details: [DetailSectionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Tourism', TourismSchema);
