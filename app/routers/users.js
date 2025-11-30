var express = require("express");
var router = express.Router();
var ctrl = require("../controllers/users");

router.route("/")
  .get(ctrl.list)
  .post(ctrl.create);

router.route("/:id")
  .get(ctrl.getById)
  .put(ctrl.update)
  .delete(ctrl.remove);

module.exports = router;
