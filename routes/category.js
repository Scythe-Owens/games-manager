const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');

router.post('/', categoryCtrl.createCategory);
router.get('/', categoryCtrl.readCategories);

module.exports = router;
