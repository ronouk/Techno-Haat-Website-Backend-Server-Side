const mongoose = require("mongoose");
const validator = require("validator");

const blogListInfoSchema = mongoose.Schema(
  {
    category: {
      type: String,
    },
    blogTitle: {
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

const blogsListInfo = mongoose.model("blogsList", blogListInfoSchema);

module.exports = blogsListInfo;
