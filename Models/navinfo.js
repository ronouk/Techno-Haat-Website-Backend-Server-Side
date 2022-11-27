const mongoose = require("mongoose");

const navInfoSchema = mongoose.Schema({
  navLogo: {
    type: String,
  },
});

const navInfo = mongoose.model("navigation", navInfoSchema);

module.exports = navInfo;
