//operation = RU
const navInfo = require("../Models/navinfo");

exports.createNavInfoSchema = async (data) => {
  const result = await navInfo.create(data);
  return result;
};

exports.getNavInfoSchema = async () => {
  const result = await navInfo.find();
  return result;
};

exports.updateNavInfoSchema = async (data) => {
  const result = await navInfo.updateMany(data);
  return result;
};
