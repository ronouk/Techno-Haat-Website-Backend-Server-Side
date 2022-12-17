//operation = RU
const express = require("express");
const router = express.Router();
const randomController = require("../Controllers/random.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .get(randomController.getRandomContent)
  .put(
    verifyToken,
    authorization("admin"),
    randomController.updateRandomContent
  );

module.exports = router;
