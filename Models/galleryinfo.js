const mongoose = require("mongoose");
const { objectId } = mongoose.Schema.Types;
const validator = require("validator");

const galleryInfoSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "Enter image title"],
  },

  slogan: {
    type: String,
    require: [true, "Enter slogan here"],
  },

  images: {
    type: Image,
    require: [true, "Chose your image"],
  },
});

module.exports = galleryInfoSchema;
