const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  cityName: { type: String, required: true },
  desc: { type: String, required: true },
  bg: { type: String, required: true },
  heroTitle: { type: String, required: true },
  heroDesc: { type: String, required: true },
  heroImg: { type: String, required: true },
  popularDesc: { type: String, required: true },
  popularArr: { type: [String], required: true },
  videoUrl: { type: String, required: true },
  tempDesc: { type: String, required: true },
  giftDesc: { type: String, required: true },
  giftImages: { type: [String], required: true },
  kitchenDesc: { type: String, required: true },
  kitchenImages: { type: [String], required: false },
  historyDesc: { type: String, required: false },
  coordinates: {
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false },
  },
  images: { type: [String], required: false },  
  infoList: [{
    name: { type: String, required: false },
    img: { type: String, required: false }
  }]
}, { timestamps: true }); 

module.exports = mongoose.model('City', CitySchema);
