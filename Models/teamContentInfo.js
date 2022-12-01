//DB operation ru
const mongoose = require("mongoose");

const teamContentInfoSchema = mongoose.Schema({
  sectionName: String,
  sectionSlogan: String,
  title: String,
  slogan: String,
});

const teamContentInfo = mongoose.model("teamContent", teamContentInfoSchema);

module.exports = teamContentInfo;
