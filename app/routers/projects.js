var express = require("express");
var router = express.Router();

var {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/projects");

router.route("/")
  .get(getProjects)
  .post(createProject);

router.route("/:id")
  .put(updateProject)
  .delete(deleteProject);

module.exports = router;
