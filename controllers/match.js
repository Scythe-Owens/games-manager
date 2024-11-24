const Match = require('../models/match');

exports.createMatch = (req, res, next) => {
    const matchObject = req.body;
    delete matchObject._id;

    const match = new Match(
        matchObject
    );

    match.save()
        .then(match => res.status(201).json({ match }))
        .catch(error => res.status(400).json({ error }))
    ;
}

exports.readMatchById = (req, res, next) => {
    Match.findOne({ _id: req.params.id })
        .then(match => res.status(201).json({ match }))
        .catch(error => res.status(400).json({ error }))
    ;
}

exports.updateMatch = (req, res, next) => {
    const matchObject = req.body;

    Match.updateOne({ _id: req.params.id }, { ...matchObject })
        .then(match => res.status(201).json({ match }))
        .catch(error => res.status(400).json({ error }))
    ;
}
