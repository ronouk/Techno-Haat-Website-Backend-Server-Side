//operation = RU
const express = require("express");
const router = express.Router();
const aboutController = require("../Controllers/about.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .get(aboutController.getAbout)
  .post(
    verifyToken,
    authorization("admin"),
    aboutController.createAboutInfoSchema
  )
  .put(verifyToken, authorization("admin"), aboutController.updateAbout);

module.exports = router;
