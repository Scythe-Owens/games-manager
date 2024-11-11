const Song = require('../models/song');

exports.createSong = (req, res, next) => {
    const songObject = req.body;
    delete songObject._id;

    const song = new Song(
        songObject
    );

    song.save()
        .then(() => res.status(201).json({ message: 'Song saved' }))
        .catch((error) => res.status(400).json({ message: error }))
    ;
}
