//operation = RU
const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/contact.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .get(contactController.getContact)
  .put(verifyToken, authorization("admin"), contactController.updateContact);
module.exports = router;
