//operation = RU
const express = require("express");
const router = express.Router();
const navController = require("../Controllers/navBanner.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .get(navController.getNavBanner)
  .put(verifyToken, authorization("admin"), navController.updateNavBanner);

module.exports = router;
