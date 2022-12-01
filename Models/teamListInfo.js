//DB operation ru
const mongoose = require("mongoose");

const teamListInfoSchema = mongoose.Schema({
  sectionName: String,
  sectionSlogan: String,
  title: String,
  slogan: String,
});

const teamListInfo = mongoose.model("teamList", teamListInfoSchema);

module.exports = teamListInfo;
