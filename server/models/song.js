const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist: { type: String, required: true },
    song: { type: String, required: true },
    img: { type: String, required: true }
});

module.exports = mongoose.model("song", songSchema)