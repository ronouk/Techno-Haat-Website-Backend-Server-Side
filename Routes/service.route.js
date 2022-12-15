//operation = RU
const express = require("express");
const router = express.Router();
const serviceController = require("../Controllers/service.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/content")
  .get(serviceController.getServicesContent)
  .post(
    verifyToken,
    authorization("admin", "moderator"),
    serviceController.createServicesContent
  )
  .put(
    verifyToken,
    authorization("admin", "moderator"),
    serviceController.updateServicesContent
  );

//service list route
router
  .route("/list")
  .post(
    verifyToken,
    authorization("admin", "moderator"),
    serviceController.createServicesList
  )
  .get(serviceController.getServicesList)
  .put(
    verifyToken,
    authorization("admin", "moderator"),
    serviceController.updateServicesList
  );
//unique service route
router
  .route("/list/:id")
  .get(serviceController.getUniqueService)
  .put(
    verifyToken,
    authorization("admin", "moderator"),
    serviceController.updateUniqueService
  );

module.exports = router;
