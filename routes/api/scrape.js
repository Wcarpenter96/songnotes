const router = require("express").Router();
const scrapeController = require("../../controllers/scrapeController");

router.route("/")
  .get(scrapeController.scrapeAll)

module.exports = router;