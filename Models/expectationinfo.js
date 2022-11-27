const mongoose = require("mongoose");
const validator = require("validator");

const expectationInfoSchema = mongoose.Schema({
  qualityTitle: {
    type: String,
  },

  qualityPara: {
    type: String,
  },
  focusTitle: {
    type: String,
  },
  focusPara1: {
    type: String,
  },
  focusPara2: {
    type: String,
  },
});

const expectationInfo = mongoose.model("expectation", expectationInfoSchema);

module.exports = expectationInfo;
