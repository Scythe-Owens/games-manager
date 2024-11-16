const Player = require('../models/player');

exports.createPlayer = (req, res, next) => {
    const playerObject = req.body;
    delete playerObject._id;

    const player = new Player(
        playerObject
    );

    player.save()
        .then(player => res.status(201).json({ player }))
        .catch(error => res.status(400).json({ error }))
    ;
}
