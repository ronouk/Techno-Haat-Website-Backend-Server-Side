//operation = RU
const aboutInfoSchema = require("../Models/AboutInfo");

exports.createAboutInfoSchema = async (data) => {
  const result = await aboutInfoSchema.create(data);
  return result;
};

exports.getAboutInfoSchema = async () => {
  const result = await about.find();
  return result;
};
