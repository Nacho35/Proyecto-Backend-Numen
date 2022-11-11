const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seriesSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  description: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  url: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Series", seriesSchema);
