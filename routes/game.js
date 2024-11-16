const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const sharp = require('../middleware/sharp-config');
const slugify = require('../middleware/slug-config');

const gameCtrl = require('../controllers/game');

router.post('/', multer, sharp, slugify, gameCtrl.createGame);
router.get('/', gameCtrl.readGames);
router.get('/:slug', gameCtrl.readGame);
// router.put('/:id', songCtrl.updateBook);
// router.delete('/:id', songCtrl.deleteBook);
// router.post('/:id/rating', songCtrl.rateBook);

module.exports = router;
