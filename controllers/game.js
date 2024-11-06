const Game = require('../models/game');

exports.createGame = (req, res, next) => {
    const gameObject = JSON.parse(req.body.game);
    delete gameObject._id;

    const game = new Game({
        ...gameObject,
        media: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })

    game.save()
        .then(() => res.status(201).json({ message: 'Game saved'}))
        .catch(error => res.status(400).json({ error }))
    ;
}

exports.readGames = (req, res, next) => {
    Game.find()
        .then(games => res.status(200).json(games))
        .catch(error => res.status(400).json({ error }))
    ;
}
