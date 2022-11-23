//operation = RU
const express = require("express");
const router = express.Router();
const homeBannerController = require("../Controllers/homeBanner.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(homeBannerController.getHomeBanner)
  .post(homeBannerController.createHomeBannerInfo)
  .put(homeBannerController.updateHomeBanner);

module.exports = router;
