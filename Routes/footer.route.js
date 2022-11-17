//operation = RU
const express = require("express");
const router = express.Router();
const footerController = require("../Controllers/footer.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(footerController.getFooter)
  .put(footerController.updateFooter);

module.exports = router;
