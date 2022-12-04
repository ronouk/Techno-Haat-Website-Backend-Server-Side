//operation = CRUD
const {
  getBlogsContentInfoSchema,
  updateBlogsContentInfoSchema,
  createUniqueBlogInfoSchema,
  getUniqueBlogInfoSchema,
  updateUniqueBlogInfoSchema,
  getBlogListInfoSchema,
  deleteUniqueBlogInfoSchema,
} = require("../Services/blog.service");
//------------------------blog Content------------------------
exports.getBlogContent = async (req, res, next) => {
  try {
    const result = await getBlogsContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Blogs Content Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Blogs Content data get error",
      error: error.message,
    });
  }
};
exports.updateBlogContent = async (req, res, next) => {
  try {
    const result = await updateBlogsContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Blogs Content Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Blogs Content data Updated error",
      error: error.message,
    });
  }
};
exports.createBlogContent = async (req, res, next) => {
  res.send("blog Content Created ++");
};
//-------------------- blog List --------------------------
exports.createBlogList = async (req, res, next) => {
  try {
    const result = await createUniqueBlogInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Blogs Data created Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Blogs Data create error",
      error: error.message,
    });
  }
};
exports.getBlogList = async (req, res, next) => {
  try {
    const result = await getBlogListInfoSchema();

    res.status(200).json({
      status: "success",
      message: "Blogs Content Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Blogs Content data get error",
      error: error.message,
    });
  }
};
exports.getBlogListWithId = async (req, res, next) => {
  const blogId = req.params.id;
  try {
    const result = await getUniqueBlogInfoSchema(blogId);

    res.status(200).json({
      status: "success",
      message: "Blogs Content Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Blogs Content data get error",
      error: error.message,
    });
  }
};
exports.updateBlogList = async (req, res, next) => {
  const blogId = req.params.id;
  const blogData = req.body;
  try {
    const result = await updateUniqueBlogInfoSchema(blogId, blogData);

    res.status(200).json({
      status: "success",
      message: "Service Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't get Services Data an error occurred",
      error: error.message,
    });
  }
};
exports.deleteBlogList = async (req, res, next) => {
  const blogId = req.params.id;
  try {
    const result = await deleteUniqueBlogInfoSchema(blogId);

    res.status(200).json({
      status: "success",
      message: "Blogs deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Blogs delete failed an error occurred",
      error: error.message,
    });
  }
};
