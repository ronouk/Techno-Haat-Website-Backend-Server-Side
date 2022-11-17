//operation = RU
const express = require("express");
const router = express.Router();
const randomController = require("../Controllers/random.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(randomController.getRandomContent)
  .put(randomController.updateRandomContent);

module.exports = router;
