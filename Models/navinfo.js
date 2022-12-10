const mongoose = require("mongoose");

const navInfoSchema = mongoose.Schema({
  navLogo: {
    data: Buffer,
    contentType: String,
  },
});

const navInfo = mongoose.model("navigation", navInfoSchema);

module.exports = navInfo;
