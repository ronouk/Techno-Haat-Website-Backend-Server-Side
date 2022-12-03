//operation = CRUD
const express = require("express");
const router = express.Router();
const projectsController = require("../Controllers/projects.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/content")
  .get(projectsController.getProjectsContent)
  .put(projectsController.updateProjectsContent)
  .post(projectsController.createProjectsContent);
router
  .route("/list")
  .get(projectsController.getProjectsList)
  .post(projectsController.createProjectsList);
//unique service route
router
  .route("/list/:id")
  .get(projectsController.getUniqueProject)
  .put(projectsController.updateUniqueProject);

module.exports = router;
