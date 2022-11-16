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

  /* FALTA SOLUCIONAR COMO PASAR METODO CHAPTER VIA POSTMAN (Devuelve error al pasarle el atributo "chapter") */
  chapter: {
    type: Schema.Types.ObjectId,
    ref: "serie",
  },
});

module.exports = mongoose.model("Series", seriesSchema);
