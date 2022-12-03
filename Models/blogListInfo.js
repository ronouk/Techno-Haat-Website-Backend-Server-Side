const mongoose = require("mongoose");
const validator = require("validator");

const blogListInfoSchema = mongoose.Schema(
  {
    category: {
      type: String,
    },
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    mainDescriptionTitle: {
      type: String,
    },
    mainDescription: {
      type: String,
    },
    description: [
      {
        descriptionTitle: String,
        img: String,
        paragraph: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const blogsListInfo = mongoose.model("blogsList", blogListInfoSchema);

module.exports = blogsListInfo;
