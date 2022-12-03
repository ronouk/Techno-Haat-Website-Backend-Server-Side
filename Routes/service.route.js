//operation = RU
const express = require("express");
const router = express.Router();
const serviceController = require("../Controllers/service.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/content")
  .post(serviceController.createServicesContent)
  .get(serviceController.getServicesContent)
  .put(serviceController.updateServicesContent);

//service list route
router
  .route("/list")
  .post(serviceController.createServicesList)
  .get(serviceController.getServicesList)
  .put(serviceController.updateServicesList);
//unique service route
router
  .route("/list/:id")
  .get(serviceController.getUniqueService)
  .put(serviceController.updateUniqueService);

module.exports = router;
