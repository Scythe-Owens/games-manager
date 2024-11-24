const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
    game: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
    categories: { type: Array, default: []},
    songs: { type: Array, default: []},
    isEnded: { type: Boolean, default: false, required: true }
});

module.exports = mongoose.model('Match', matchSchema);
