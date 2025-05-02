const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');
const upload = require('../middlewares/uploadMiddleware');


router.get('/', cityController.getAllCities);


router.get('/:id', cityController.getCityById);


router.post(
  '/',
  upload.fields([{
      name: 'heroImg',
      maxCount: 1
    },
    {
      name: 'images',
      maxCount: 10
    },
    {
      name: 'giftImages',
      maxCount: 10
    },
    {
      name: 'kitchenImages',
      maxCount: 10
    }
  ]),
  cityController.createCity
);



router.put('/:id', cityController.updateCity);

router.delete('/:id', cityController.deleteCity);

module.exports = router;