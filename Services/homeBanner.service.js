//operation = RU
const homeBannerInfo = require("../Models/homeBanneinfo");

exports.createHomeBannerInfoSchema = async (data) => {
  const result = await homeBannerInfo.create(data);
  return result;
};

exports.getHomeBannerInfoSchema = async () => {
  const result = await homeBannerInfo.find();
  return result;
};

exports.updateHomeBannerInfoSchema = async (data) => {
  const result = await homeBannerInfo.updateMany(data);
  return result;
};
