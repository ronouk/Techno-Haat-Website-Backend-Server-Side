//this is user route
const express = require("express");
const { route } = require("../app");
const userController = require("../Controllers/user.controller");
const tokenVerification = require("../middleware/tokenVerification");

const router = express.Router();

router.post("/create", userController.signup);
router.post("/login", userController.login);

router.get("/me", tokenVerification, userController.getMe);
router.get("/list", userController.getUsers);

router
  .route("/list/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
