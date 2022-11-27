//operation = CRD
const footerInfo = require("../Models/footerinfo");

exports.createFooterInfoSchema = async (data) => {
  const result = await footerInfo.create(data);
  return result;
};

exports.getFooterInfoSchema = async () => {
  const result = await footerInfo.find();
  return result;
};
exports.updateFooterInfoSchema = async (data) => {
  const result = await footerInfo.updateMany(data);
  return result;
};
