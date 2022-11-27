const mongoose = require("mongoose");
const { objectId } = mongoose.Schema.Types;
const validator = require("validator");

const galleryInfoSchema = mongoose.Schema({
  title: {
    type: String,
  },

  slogan: {
    type: String,
  },

  images: [
    {
      type: String,
    },
  ],
});

const galleryInfo = mongoose.model("teamGallery", galleryInfoSchema);
console.log(galleryInfoSchema, "from schema");

module.exports = galleryInfo;
