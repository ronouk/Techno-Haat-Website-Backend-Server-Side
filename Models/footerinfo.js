const mongoose = require("mongoose");
// const { objectId } = mongoose.Schema.Types;
// const validator = require("validator");

const footerInfoSchema = mongoose.Schema({
  logo: {
    type: String,
  },

  intro: {
    type: String,
  },

  aboutLinks: [
    [
      {
        type: String,
      },
    ],
  ],

  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  copyright: {
    type: String,
  },
});

const footerInfo = mongoose.model("footer", footerInfoSchema);

module.exports = footerInfo;
