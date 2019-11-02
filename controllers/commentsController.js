const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Comment
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Comment
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Comment.create(req.body)
            .then(function (dbComment) {
                return db.Song.findOneAndUpdate({_id : req.params.id}, { $push: { comments: dbComment._id } }, { new: true });
            })
            .then(function (dbSong) {
                res.json(dbSong);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    remove: function (req, res) {
        db.Comment
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
