const mongoose = require('mongoose');

const ruleSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true}
});

const gameSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    media: { type: String, required: true },
    rules: [ruleSchema],
    last_played: { type: Date },
});

module.exports = mongoose.model('Game', gameSchema);
