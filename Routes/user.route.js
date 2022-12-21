//this is user route
const express = require("express");
const { route } = require("../app");
const userController = require("../Controllers/user.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.post("/create", userController.signup);
router.post("/login", userController.login);

router.get("/me", verifyToken, userController.getMe);
router.get("/list", verifyToken, userController.getUsers);

router
  .route("/list/:id")
  .get(userController.getUser)
  .put(verifyToken, authorization("admin"), userController.updateUser)
  .delete(verifyToken, authorization("admin"), userController.deleteUser);

module.exports = router;
