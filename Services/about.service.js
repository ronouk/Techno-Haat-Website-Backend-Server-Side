//operation = RU
const aboutInfo = require("../Models/AboutInfo");

exports.createAboutInfoSchema = async (data) => {
  const result = await aboutInfo.create(data);
  return result;
};

exports.getAboutInfoSchema = async () => {
  const result = await aboutInfo.find();
  return result;
};

exports.updateAboutSchema = async (data) => {
  const result = await aboutInfo.updateMany(data);
  return result;
};
