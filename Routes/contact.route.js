//operation = RU
const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/contact.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(contactController.getContact)
  .put(contactController.updateContact);

module.exports = router;
