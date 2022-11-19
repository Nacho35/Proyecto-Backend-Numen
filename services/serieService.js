const Serie = require("../models/series");

const createSerie = async (title, description, url, category, chapter) => {
  let result;
  try {
    const newSerie = new Serie({ title, description, url, category, chapter });
    await newSerie.save();
    result = {
      status: 201,
      message: "La Serie fue creada correctamente",
      newSerie,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
  return result;
};

const getSerie = async (category) => {
  let result;
  let criteria = {};
  try {
    if (category) {
      criteria.category = category;
    }
    const series = await Serie.find(criteria);
    result = {
      status: 200,
      series,
    };
  } catch (error) {
    throw error;
  }
  return result;
};

/*
    FALTA LA LÓGICA EN METODO PUT (Update) Y EN DELETE
*/

const updateSerie = async (id) => {
  let result;
  const { title, description, url, category, chapter } = Serie;
  try {
    const series = await Serie.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          description,
          url,
          category,
          chapter,
        },
      }
    );
    result = {
      series,
    };
  } catch (error) {
    throw error;
  }
  return result;
};

const deleteSerie = async (id) => {
  let result;
  try {
    const series = await Serie.findByIdAndDelete({ _id: id });
    result = {
      series,
    };
  } catch (error) {
    throw error;
  }
  return result;
};

module.exports = {
  createSerie,
  getSerie,
  updateSerie,
  deleteSerie,
};
