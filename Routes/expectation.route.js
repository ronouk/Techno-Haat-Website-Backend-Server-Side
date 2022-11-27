//operation = RU
const express = require("express");
const router = express.Router();
const expectationController = require("../Controllers/expectation.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(expectationController.getExpectation)
  .post(expectationController.createExpectation)
  .put(expectationController.updateExpectation);

module.exports = router;
