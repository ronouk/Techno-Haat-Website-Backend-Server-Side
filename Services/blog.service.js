//operation = CRUD
//Blog Content section
const blogContentInfo = require("../Models/blogContentinfo");
const blogListInfo = require("../Models/blogListInfo");
const ObjectId = require("mongodb").ObjectId;

exports.getBlogsContentInfoSchema = async () => {
  const result = await blogContentInfo.find();
  return result;
};
exports.updateBlogsContentInfoSchema = async (data) => {
  const result = await blogContentInfo.updateMany(data);
  return result;
};
// all blog list

exports.getBlogListInfoSchema = async () => {
  const result = await blogListInfo.find();
  return result;
};

//------------------Blog list single section------------------
exports.createUniqueBlogInfoSchema = async (data) => {
  const result = await blogListInfo.insertMany(data);
  return result;
};
exports.getUniqueBlogInfoSchema = async (id, blogTitle) => {
  if (id) {
    const query = { _id: ObjectId(id) };
    const result = await blogListInfo.find(query);
    return result;
  }
  if (blogTitle) {
    var str = blogTitle;
    str = str.replaceAll("-", " ");
    const query = { blogTitle: str };
    const result = await blogListInfo.find(query);
    return result;
  }
};
exports.updateUniqueBlogInfoSchema = async (id, updatedData) => {
  const query = { _id: ObjectId(id) };
  const result = await blogListInfo.updateMany(query, updatedData);
  return result;
};
exports.deleteUniqueBlogInfoSchema = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await blogListInfo.deleteOne(query);
  return result;
};
