const router = require("express").Router();
const songsController = require("../../controllers/songsController");

router.route("/")
  .get(songsController.findAll)

router.route("/:id")
  .get(songsController.findById)

module.exports = router;