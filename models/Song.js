var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SongSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]

});

var Song = mongoose.model("Song", SongSchema);

module.exports = Song;
