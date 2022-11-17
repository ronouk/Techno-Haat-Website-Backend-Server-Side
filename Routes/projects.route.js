//operation = CRUD
const express = require("express");
const router = express.Router();
const projectsController = require("../Controllers/projects.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(projectsController.getProjects)
  .put(projectsController.updateProjects)
  .post(projectsController.createProjects)
  .delete(projectsController.deleteProjects);

module.exports = router;
