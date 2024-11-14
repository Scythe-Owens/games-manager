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
