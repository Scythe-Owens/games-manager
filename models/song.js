const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    name: { type: String, required: true },
    categories: { type: Array, required: true },
    link: { type: String, required: true },
});

module.exports = mongoose.model('Song', songSchema);
