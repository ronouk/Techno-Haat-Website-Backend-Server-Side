//frontend component name HomeBanner
const mongoose = require("mongoose");
// const { objectId } = mongoose.Schema.Types;

const homeBannerInfoSchema = mongoose.Schema({
  sideBarTitle: {
    type: String,
  },

  sideBarLinks: [
    [
      {
        type: String,
      },
    ],
  ],

  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  bannerSlogan: {
    type: String,
  },
  bannerButtonName: [
    [
      {
        type: String,
      },
    ],
  ],
  bannerImages: [
    {
      type: String,
    },
  ],
});

const homeBannerInfo = mongoose.model("homeBanner", homeBannerInfoSchema);

module.exports = homeBannerInfo;
