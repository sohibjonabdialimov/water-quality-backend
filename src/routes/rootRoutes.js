const express = require('express');
const router = express.Router();
const rootController = require('../controllers/rootController');


router.get('/', rootController.getAllRoot);


router.get('/:id', rootController.getRootById);


router.post(
  '/',
  rootController.createRoot
);


router.put('/:id', rootController.updateRoot);
router.patch('/:id', rootController.patchRoot);
router.delete('/:id', rootController.deleteRoot);

module.exports = router;