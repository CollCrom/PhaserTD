const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
	name: String,
	description: Number
});

module.exports = mongoose.model('Score', ScoreSchema);