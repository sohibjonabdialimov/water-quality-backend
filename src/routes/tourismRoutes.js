const express = require('express');
const router = express.Router();
const tourismController = require('../controllers/tourismController');


router.get('/', tourismController.getAllTourismPlaces);


router.get('/:slug', tourismController.getTourismBySlug);


router.post('/', tourismController.createTourismPlace);


router.put('/:slug', tourismController.updateTourismPlace);


router.delete('/:slug', tourismController.deleteTourismPlace);

module.exports = router;
