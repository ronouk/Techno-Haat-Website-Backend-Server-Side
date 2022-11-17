//operation = RU
const express = require("express");
const router = express.Router();
const navController = require("../Controllers/nav.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router.route("/").get(navController.getNav).put(navController.updateNav);

module.exports = router;
