//operation = RU
const express = require("express");
const router = express.Router();
const teamController = require("../Controllers/team.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router.route("/").get(teamController.getTeam).put(teamController.updateTeam);

module.exports = router;
