let mongoose = require('mongoose');

let sonteSchema = new mongoose.Schema(
    {
        songName: String,
        genres: String,
        author: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Sonte', sonteSchema);