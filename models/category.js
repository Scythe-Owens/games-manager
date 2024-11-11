const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    reward: { type: Number, required: true },
    games: { type: Array, required: true }
});

module.exports = mongoose.model('Category', categorySchema);
