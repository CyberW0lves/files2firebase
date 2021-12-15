const router = require("express").Router();
const Song = require('../models/song');

// Create song
router.post("/", async (req, res) => {
    try {
        const song = await Song(req.body).save();
        res.status(201).send({data: song, message: "Song created successfully"})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})

// Get all songs
router.get("/", async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).send({data: songs})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router;