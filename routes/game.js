const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const sharp = require('../middleware/sharp-config');

const gameCtrl = require('../controllers/game');

router.post('/', multer, sharp, gameCtrl.createGame);
router.get('/', gameCtrl.readGames);
// router.get('/bestrating', songCtrl.findBestRatedBooks);
// router.get('/:id', songCtrl.findBookById);
// router.put('/:id', songCtrl.updateBook);
// router.delete('/:id', songCtrl.deleteBook);
// router.post('/:id/rating', songCtrl.rateBook);

module.exports = router;
