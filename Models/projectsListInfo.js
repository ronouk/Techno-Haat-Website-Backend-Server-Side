const mongoose = require("mongoose");

const projectsListInfoSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    projectTitle: {
      type: String,
    },
    projectLink: {
      type: String,
    },
    projectBannerImage: {
      type: String,
    },
    detailTitle: {
      type: String,
    },
    detailParagraph: {
      type: String,
    },
    clientName: {
      type: String,
    },
    category: {
      type: String,
    },
    date: {
      type: String,
    },
    social: [
      [
        {
          type: String,
        },
      ],
    ],
    dynamicDetail: [
      {
        title: String,
        paragraph: String,
        image: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const projectsListInfo = mongoose.model("projectsList", projectsListInfoSchema);

module.exports = projectsListInfo;
