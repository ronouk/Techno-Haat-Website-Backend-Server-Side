//operation = CRUD
const express = require("express");
const router = express.Router();
const blogController = require("../Controllers/blog.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/")
  .get(blogController.getBlog)
  .put(blogController.updateBlog)
  .post(blogController.createBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
