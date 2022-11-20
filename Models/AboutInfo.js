const mongoose = require("mongoose");
// const { objectId } = mongoose.Schema.Types;

const aboutInfoSchema = mongoose.Schema({
  aboutBannerImage: {
    type: String,
  },

  aboutBannerImageMini: {
    type: String,
  },

  sectionName: {
    type: String,
    /* require: [false, "Please enter your website section name"], */
  },
  sectionTitle: {
    type: String,
    /*  require: [false, "Please Enter your first title"], */
  },
  sectionSlogan: {
    type: String,
    /*  require: [false, "Enter your second title"], */
  },
  sectionDescription: {
    type: String,
    /* require: [false, "Write your description here"], */
  },
  miniSlogan: {
    type: String,
    /* require: [false, "Write your description here"], */
  },
  aboutPointList: [
    {
      type: String,
      /*  require: [false, "Enter your ICON"], */
    },
  ],
});

const aboutInfo = mongoose.model("about", aboutInfoSchema);
console.log(aboutInfo);

module.exports = aboutInfo;
