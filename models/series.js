const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seriesSchema = new Schema({
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
  chapterSerie: {
    type: Schema.Types.ObjectId,
    ref: "Serie",
  },
});

module.exports = mongoose.model("series", seriesSchema);
