const express = require('express');
const router = express.Router();

const songCtrl = require('../controllers/song');

router.post('/', songCtrl.createSong);
router.get('/', songCtrl.readAll);
router.get('/category/:categoryId', songCtrl.readAllByCategory);
// router.get('/bestrating', songCtrl.findBestRatedBooks);
// router.get('/:id', songCtrl.findBookById);
// router.put('/:id', songCtrl.updateBook);
// router.delete('/:id', songCtrl.deleteBook);
// router.post('/:id/rating', songCtrl.rateBook);

module.exports = router;
