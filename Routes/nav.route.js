//operation = RU
const express = require("express");
const router = express.Router();
const navController = require("../Controllers/nav.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .get(navController.getNav)
  .post(verifyToken, authorization("admin"), navController.createNav)
  .put(verifyToken, authorization("admin"), navController.updateNav);

module.exports = router;
