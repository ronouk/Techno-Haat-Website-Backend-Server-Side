//operation = CRU
const express = require("express");
const router = express.Router();
const teamController = require("../Controllers/team.controller");
// const veryfyToken = require("../middleware/veryfyToken");

//team content route
router
  .route("/content")
  .post(teamController.createTeamContent)
  .get(teamController.getTeamContent)
  .put(teamController.updateTeamContent);

//team list route
router
  .route("/list")
  .post(teamController.createTeamList)
  .get(teamController.getTeamList)
  .put(teamController.updateTeamList);
router
  .route("/list/:id")
  .get(teamController.getTeam)
  .put(teamController.updateTeam);

module.exports = router;
