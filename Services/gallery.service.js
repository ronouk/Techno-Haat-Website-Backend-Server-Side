//operation = CRD
const galleryInfo = require("../Models/galleryinfo");

exports.createGalleryInfoSchema = async (data) => {
  const result = await galleryInfo.create(data);
  return result;
};

exports.getGalleryInfoSchema = async () => {
  const result = await galleryInfo.find();
  return result;
};
exports.updateGalleryInfoSchema = async (data) => {
  const result = await galleryInfo.updateMany(data);
  return result;
};
exports.deleteGalleryInfoSchema = async (data) => {
  const result = await galleryInfo.deleteOne(data);
  return result;
};
