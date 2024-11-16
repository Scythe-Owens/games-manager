const express = require('express');
const router = express.Router();

const playerCtrl = require('../controllers/player');

router.post('/', playerCtrl.createPlayer);
// router.get('/', gameCtrl.readGames);
// router.get('/:slug', gameCtrl.readGame);
// router.put('/:id', songCtrl.updateBook);
// router.delete('/:id', songCtrl.deleteBook);
// router.post('/:id/rating', songCtrl.rateBook);

module.exports = router;
