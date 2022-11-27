const mongoose = require("mongoose");
const validator = require("validator");

const clientsInfoSchema = mongoose.Schema({
  sectionName: {
    type: String,
  },
  sectionSlogan: {
    type: String,
  },
  clientsList: [
    [
      {
        type: String,
      },
    ],
  ],
});

const clientsInfo = mongoose.model("clients", clientsInfoSchema);

module.exports = clientsInfo;
