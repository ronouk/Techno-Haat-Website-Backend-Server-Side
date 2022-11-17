//operation = CRD
const express = require("express");
const router = express.Router();
const galleryController = require("../Controllers/gallery.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(galleryController.getGallery)
  .post(galleryController.createGallery)
  .delete(galleryController.deleteGallery);

module.exports = router;
