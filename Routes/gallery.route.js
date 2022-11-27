//operation = CRD
const express = require("express");
const router = express.Router();
const galleryController = require("../Controllers/gallery.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .post(galleryController.createGallery)
  .get(galleryController.getGallery)
  .put(galleryController.updateGallery)
  .delete(galleryController.deleteGallery);

module.exports = router;
