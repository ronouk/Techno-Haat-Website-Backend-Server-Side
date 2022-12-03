//operation = CRUD
const express = require("express");
const router = express.Router();
const blogController = require("../Controllers/blog.controller");
// const veryfyToken = require("../middleware/veryfyToken");

router
  .route("/content")
  .get(blogController.getBlogContent)
  .put(blogController.updateBlogContent);
router
  .route("/list")
  .get(blogController.getBlogList)
  .post(blogController.createBlogList);
router
  .route("/list/:id")
  .get(blogController.getBlogListWithId)
  .put(blogController.updateBlogList)
  .delete(blogController.deleteBlogList);

module.exports = router;
