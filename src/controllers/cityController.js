const City = require('../models/City');

exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.find({}, 'cityName desc bg heroTitle heroDesc popularDesc popularArr videoUrl tempDesc giftDesc kitchenDesc historyDesc coordinates infoList images heroImg giftImages kitchenImages');
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error
    });
  }
};

exports.getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);

    if (!city) {
      return res.status(404).json({
        message: 'City not found'
      });
    }

    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error
    });
  }
};

exports.createCity = async (req, res) => {
  try {
    const {
      cityName,
      desc,
      bg,
      heroTitle,
      heroDesc,
      popularDesc,
      popularArr,
      videoUrl,
      tempDesc,
      giftDesc,
      kitchenDesc,
      historyDesc,
      infoList = [],
    } = req.body;

    const heroImgPath = req.files && req.files['heroImg'] ?
      req.files['heroImg'][0].path :
      null;

    const imagesFiles = req.files && req.files['images'] ?
      req.files['images'].map(file => file.path) : [];

    const giftImagesFiles = req.files && req.files['giftImages'] ?
      req.files['giftImages'].map(file => file.path) : [];

    const kitchenImagesFiles = req.files && req.files['kitchenImages'] ?
      req.files['kitchenImages'].map(file => file.path) : [];
    const coordinates = {
      latitude: req.body.latitude,
      longitude: req.body.longitude
    };



    const city = new City({
      cityName,
      desc,
      bg,
      heroTitle,
      heroDesc,
      heroImg: heroImgPath,
      popularDesc,
      popularArr,
      videoUrl,
      tempDesc,
      giftDesc,
      giftImages: giftImagesFiles,
      kitchenDesc,
      kitchenImages: kitchenImagesFiles,
      images: imagesFiles,
      historyDesc,
      coordinates,
      infoList: infoList ? JSON.parse(infoList) : []
    });

    await city.save();
    res.status(201).json({
      data: {
        message: 'City created successfully',
        city: {
          cityName,
          desc,
          bg,
          heroTitle,
          heroDesc,
          heroImg: heroImgPath,
          popularDesc,
          popularArr,
          videoUrl,
          tempDesc,
          giftDesc,
          giftImages: giftImagesFiles,
          kitchenDesc,
          kitchenImages: kitchenImagesFiles,
          images: imagesFiles,
          historyDesc,
          coordinates,
          infoList
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'Invalid data',
      error: error.message
    });
  }
};



exports.updateCity = async (req, res) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedCity) {
      return res.status(404).json({
        message: 'City not found'
      });
    }

    res.status(200).json(updatedCity);
  } catch (error) {
    res.status(400).json({
      message: 'Invalid data',
      error
    });
  }
};

exports.deleteCity = async (req, res) => {
  try {
    const deletedCity = await City.findByIdAndDelete(req.params.id);

    if (!deletedCity) {
      return res.status(404).json({
        message: 'City not found'
      });
    }

    res.status(200).json({
      message: 'City deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error
    });
  }
};