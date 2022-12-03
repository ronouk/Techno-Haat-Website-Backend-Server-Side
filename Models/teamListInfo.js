//DB operation ru
const mongoose = require("mongoose");

const teamListInfoSchema = mongoose.Schema(
  {
    name: String,
    image: String,
    designation: String,
    social: [
      [
        {
          type: String,
        },
      ],
    ],
    description: String,
  },
  {
    timestamps: true,
  }
);

const teamListInfo = mongoose.model("teamList", teamListInfoSchema);

module.exports = teamListInfo;
