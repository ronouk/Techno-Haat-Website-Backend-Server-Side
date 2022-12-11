const user = require("../Models/userinfo");
const ObjectId = require("mongodb").ObjectId;

exports.signupService = async (userInfo) => {
  const result = await user.create(userInfo);
  return result;
};

exports.loginService = async (email) => {
  const result = await user.findOne({ email });
  return result;
};

exports.getUsersService = async () => {
  const result = await user.find();
  return result;
};

// -------------------------single user-------------------------
exports.getUserInfoSchema = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await user.find(query);
  return result;
};

exports.updateUserInfoSchema = async (id, updatedData) => {
  const query = { _id: ObjectId(id) };
  console.log(updatedData);
  const result = await user.updateMany(query, updatedData);
  return result;
};
exports.deleteUserInfoSchema = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await user.deleteOne(query);
  return result;
};
