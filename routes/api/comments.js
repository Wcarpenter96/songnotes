const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");


router.route("/")
  .get(commentsController.findAll)

router.route("/:id")
  .get(commentsController.findById)
  .post(commentsController.create)
  .delete(commentsController.remove)

module.exports = router;