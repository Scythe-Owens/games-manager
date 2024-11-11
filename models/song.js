const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    name: { type: String, required: true },
    categories: { type: Array, required: true },
    link: { type: String, required: true },
    is_played: { type: Boolean, default: false, required: true },
});

module.exports = mongoose.model('Song', songSchema);
