//operation = RU
const express = require("express");
const router = express.Router();
const clientsController = require("../Controllers/clients.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .post(clientsController.createClients)
  .get(clientsController.getClients)
  .put(clientsController.updateClients);

module.exports = router;
