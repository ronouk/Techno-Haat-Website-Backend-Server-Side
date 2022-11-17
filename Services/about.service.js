//operation = RU
const aboutInfoSchema = require("../Models/AboutInfo");

exports.getAboutInfoSchema = async () => {
  const result = await aboutInfoSchema.find();
  return result;
};
