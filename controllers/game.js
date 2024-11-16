const Game = require('../models/game');

exports.createGame = (req, res, next) => {
    const gameObject = JSON.parse(req.body.data);
    delete gameObject._id;

    const game = new Game({
        ...gameObject,
        slug: req.body.slug,
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

exports.readGame = (req, res, next) => {
    Game.findOne({ slug: req.params.slug })
        .then(game => res.status(200).json(game))
        .catch(error => res.status(400).json({ error }))
    ;
}
