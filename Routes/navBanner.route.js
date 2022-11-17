//operation = RU
const express = require("express");
const router = express.Router();
const navController = require("../Controllers/navBanner.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(navController.getNavBanner)
  .put(navController.updateNavBanner);

module.exports = router;
