const db = require("../models");

module.exports = {
    findAll: async function (req, res) {
        try {
            const songs = await db.Song.find();
            res.json(songs)
        } catch (e) {
            res.json(e);
        }
    },
    findById: async (req, res) => {
        try {
            const song = await db.Song.findById(req.params.id).populate('comments');
            res.json(song)
        } catch (e) {
            res.json(e);
        }
    }
}
