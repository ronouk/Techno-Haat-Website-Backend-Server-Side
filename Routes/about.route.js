//operation = RU
const express = require("express");
const router = express.Router();
const aboutController = require("../Controllers/about.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(aboutController.getAbout)
  .put(aboutController.updateAbout);

module.exports = router;
