const mongoose = require("mongoose");
const validator = require("validator");

const blogContentInfoSchema = mongoose.Schema({
  sectionName: {
    type: String,
  },
  sectionTitle: {
    type: String,
  },
});

const blogContentInfo = mongoose.model("blogsContent", blogContentInfoSchema);

module.exports = blogContentInfo;
