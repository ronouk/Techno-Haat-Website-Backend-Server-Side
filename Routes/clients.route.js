//operation = RU
const express = require("express");
const router = express.Router();
const clientsController = require("../Controllers/clients.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .post(verifyToken, authorization("admin"), clientsController.createClients)
  .get(clientsController.getClients)
  .put(verifyToken, authorization("admin"), clientsController.updateClients);

module.exports = router;
