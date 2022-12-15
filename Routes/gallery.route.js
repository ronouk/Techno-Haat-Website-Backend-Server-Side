//operation = CRD
const express = require("express");
const router = express.Router();
const galleryController = require("../Controllers/gallery.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .get(galleryController.getGallery)
  .post(verifyToken, authorization("admin"), galleryController.createGallery)
  .put(verifyToken, authorization("admin"), galleryController.updateGallery)
  .delete(verifyToken, authorization("admin"), galleryController.deleteGallery);

module.exports = router;
