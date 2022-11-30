//DB operation ru
const mongoose = require("mongoose");

const serviceContentInfoSchema = mongoose.Schema({
  sectionName: {
    type: String,
  },
  sectionSlogan: {
    type: String,
  },
  title: {
    type: String,
  },
  slogan: {
    type: String,
  },
  description: {
    type: String,
  },
  miniServiceList: [
    {
      type: String,
    },
  ],
});

const serviceContentInfo = mongoose.model(
  "ServiceContent",
  serviceContentInfoSchema
);

module.exports = serviceContentInfo;
