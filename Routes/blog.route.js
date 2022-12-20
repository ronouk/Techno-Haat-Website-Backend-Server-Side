//operation = CRUD
const express = require("express");
const router = express.Router();
const blogController = require("../Controllers/blog.controller");
const verifyToken = require("../middleware/tokenVerification");
const authorization = require("../middleware/authorization");

router
  .route("/content")
  .get(blogController.getBlogContent)
  .put(
    verifyToken,
    authorization("admin", "moderator"),
    blogController.updateBlogContent
  );
router
  .route("/list")
  .get(blogController.getBlogList)
  .post(
    verifyToken,
    authorization("admin", "moderator"),
    blogController.createBlogList
  );

router.route("/:name").get(blogController.getBlogListWithTitle);
router
  .route("/list/:id")
  .get(blogController.getBlogListWithId)
  .put(
    verifyToken,
    authorization("admin", "moderator"),
    blogController.updateBlogList
  )
  .delete(verifyToken, authorization("admin"), blogController.deleteBlogList);

module.exports = router;
