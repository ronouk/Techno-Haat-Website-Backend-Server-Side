//DB operation ru
const mongoose = require("mongoose");

const serviceInfoSchema = mongoose.Schema({
  sectionName: {
    type: String,
  },
});
