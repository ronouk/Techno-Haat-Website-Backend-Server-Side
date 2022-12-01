//DB operation ru
const mongoose = require("mongoose");

const serviceListInfoSchema = mongoose.Schema(
  {
    fabImage: String,
    serviceTitle: String,
    serviceDesc: String,
  },
  {
    fabImage: String,
    serviceTitle: String,
    serviceDesc: String,
  },
  {
    fabImage: String,
    serviceTitle: String,
    serviceDesc: String,
  }
);

const serviceListInfo = mongoose.model("serviceList", serviceListInfoSchema);

module.exports = serviceListInfo;
