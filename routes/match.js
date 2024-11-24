const express = require('express');
const router = express.Router();

const matchCtrl = require('../controllers/match');

router.post('/', matchCtrl.createMatch);
router.put('/:id', matchCtrl.updateMatch);
router.get('/:id', matchCtrl.readMatchById);
// router.get('/', gameCtrl.readGames);
// router.get('/:slug', gameCtrl.readGame);
// router.put('/:id', songCtrl.updateBook);
// router.delete('/:id', songCtrl.deleteBook);
// router.post('/:id/rating', songCtrl.rateBook);

module.exports = router;
