//this is user route
const express = require("express");
const { route } = require("../app");
const userController = require("../Controllers/user.controller");
const tokenVerification = require("../middleware/tokenVerification");

const router = express.Router();

router.post("/create", userController.signup);
router.post("/login", userController.login);

router.get("/me", tokenVerification, userController.getMe);

module.exports = router;
