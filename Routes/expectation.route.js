//operation = RU
const express = require("express");
const router = express.Router();
const expectationController = require("../Controllers/expectation.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .get(expectationController.getExpectation)
  .post(
    verifyToken,
    authorization("admin"),
    expectationController.createExpectation
  )
  .put(
    verifyToken,
    authorization("admin"),
    expectationController.updateExpectation
  );

module.exports = router;
