//operation = CRUD
exports.getBlog = async (req, res, next) => {
  res.send("blog get success");
};
exports.updateBlog = async (req, res, next) => {
  res.send("blog Updated!!");
};
exports.createBlog = async (req, res, next) => {
  res.send("blog Created ++");
};
exports.deleteBlog = async (req, res, next) => {
  res.send("blog deleted!!");
};
