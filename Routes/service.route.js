//operation = RU
const express = require("express");
const router = express.Router();
const serviceController = require("../Controllers/service.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(serviceController.getService)
  .put(serviceController.updateService);

module.exports = router;
