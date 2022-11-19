const series = require("../models/series");
const { serieService } = require("../services");

const createSerie = async (req, res) => {
  try {
    const { title, description, url, category, chapter } = req.body;
    const result = await serieService.createSerie(
      title,
      description,
      url,
      category,
      chapter
    );
    res.status(result.status).send(result);
  } catch (error) {
    res.status(500).send("Se produjo un error al crear el producto.");
  }
};

const getSerie = async (req, res) => {
  try {
    const { category } = req.query;
    const result = await serieService.getSerie(category);

    res.status(result.status).send(result);
  } catch (error) {
    res.status(500).send("Se produjo un error al listar las series.");
  }
};

const updateSerie = async (req, res) => {
  try {
    await series.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
    res.status(201).send("Actualizado!");
  } catch (error) {
    res.status(500).send("Se produjo un error al modificar la serie.");
  }
};

const deleteSerie = async (req, res) => {
  try {
    await series.findByIdAndDelete(req.params.id);
    res.status(201).send("Borrado!");
  } catch (error) {
    res.status(500).send("Se produjo un error al borrar la serie.");
  }
};

module.exports = {
  createSerie,
  getSerie,
  updateSerie,
  deleteSerie,
};
