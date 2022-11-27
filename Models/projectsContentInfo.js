const mongoose = require("mongoose");

const projectsContentInfoSchema = mongoose.Schema({
  sectionName: {
    type: String,
  },
  sectionSlogan: {
    type: String,
  },
});

const projectsContentInfo = mongoose.model(
  "projectsContent",
  projectsContentInfoSchema
);

module.exports = projectsContentInfo;
