var express = require("express");
var router = express.Router();

var {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require("../controllers/services");

// GET all + CREATE
router.route("/")
  .get(getServices)
  .post(createService);

// GET by ID + UPDATE + DELETE
router.route("/:id")
  .get(getServiceById)
  .put(updateService)
  .delete(deleteService);

module.exports = router;
