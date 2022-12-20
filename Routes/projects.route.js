//operation = CRUD
const express = require("express");
const router = express.Router();
const projectsController = require("../Controllers/projects.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/content")
  .get(projectsController.getProjectsContent)
  .put(
    verifyToken,
    authorization("admin", "moderator"),
    projectsController.updateProjectsContent
  )
  .post(
    verifyToken,
    authorization("admin", "moderator"),
    projectsController.createProjectsContent
  );
router
  .route("/list")
  .get(projectsController.getProjectsList)
  .post(
    verifyToken,
    authorization("admin", "moderator"),
    projectsController.createProjectsList
  );
//unique project route
router
  .route("/list/:id")
  .get(projectsController.getUniqueProject)
  .put(
    verifyToken,
    authorization("admin", "moderator"),
    projectsController.updateUniqueProject
  )
  .delete(
    verifyToken,
    authorization("admin"),
    projectsController.deleteUniqueProject
  );
//get project by name
router.route("/:name").get(projectsController.getProjectByName);

module.exports = router;
