const mongoose = require("mongoose");
// const { objectId } = mongoose.Schema.Types;
const validator = require("validator");

const aboutInfoSchema = mongoose.Schema({
  image1: {
    type: Image,
    require: [true, "Please upload a image"],
  },

  image2: {
    type: Image,
    require: [true, "Please upload a image"],
  },

  sectionName: {
    type: String,
    require: [true, "Please enter your website section name"],
  },
  title1: {
    type: String,
    require: [true, "Please Enter your first title"],
  },
  title2: {
    type: String,
    require: [false, "Enter your second title"],
  },
  description: {
    type: String,
    require: [false, "Write your description here"],
  },
  contries: {
    type: String,
    require: [false, "Write your description here"],
  },
  icons: {
    type: String,
    require: [true, "Enter your ICON"],
  },
  list: {
    type: Array,
    require: [false, "list"],
  },
});

module.exports = aboutInfoSchema;
