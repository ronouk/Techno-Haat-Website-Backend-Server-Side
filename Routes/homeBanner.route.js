//operation = RU
const express = require("express");
const router = express.Router();
const homeBannerController = require("../Controllers/homeBanner.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .get(homeBannerController.getHomeBanner)
  .post(
    verifyToken,
    authorization("admin"),
    homeBannerController.createHomeBannerInfo
  )
  .put(
    verifyToken,
    authorization("admin"),
    homeBannerController.updateHomeBanner
  );

module.exports = router;
