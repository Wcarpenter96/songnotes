const router = require("express").Router();
const songRoutes = require("./songs");
const scrapeRoutes = require("./scrape");
const commentRoutes = require("./comments");

router.use("/songs", songRoutes);
router.use("/scrape", scrapeRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
