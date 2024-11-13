const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: { type: String, required: true},
    match: { type: String, required: true },
    score: { type: Number, default: 0, required: true },
    isEnded: { type: Boolean, default: false, required: true }
})

module.exports = mongoose.model('Player', playerSchema);
