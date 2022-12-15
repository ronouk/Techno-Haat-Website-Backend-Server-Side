//operation = CRU
const express = require("express");
const router = express.Router();
const teamController = require("../Controllers/team.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

//team content route
router
  .route("/content")
  .get(teamController.getTeamContent)
  .post(
    verifyToken,
    authorization("admin", "moderator"),
    teamController.createTeamContent
  )
  .put(
    verifyToken,
    authorization("admin", "moderator"),
    teamController.updateTeamContent
  );

//team list route
router
  .route("/list")
  .get(teamController.getTeamList)
  .post(
    verifyToken,
    authorization("admin", "moderator"),
    teamController.createTeamList
  )
  .put(
    verifyToken,
    authorization("admin", "moderator"),
    teamController.updateTeamList
  );
router
  .route("/list/:id")
  .get(teamController.getTeam)
  .put(
    verifyToken,
    authorization("admin", "moderator"),
    teamController.updateTeam
  )
  .delete(verifyToken, authorization("admin"), teamController.deleteTeam);

module.exports = router;
