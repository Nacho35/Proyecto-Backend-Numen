const Chapter = require("../models/chapters");
const Serie = require('../models/series')

const createChapter = async (title, description, url, serieId) => {
  let result;
  try {
      const serieFound = await Serie.findById(userId);
      if(!serieFound) {
          return {status: 400, message: 'La serie no existe en la bd'}
      }
      const newChapter = new Chapter ({ title, description, url, serieOwner: serieId})
      await newChapter.save();
      serieFound.chapter.push(newChapter._id);
      await serieFound.save();
      result = {
          status: 201,
          message: 'El capitulo fue agregado correctamente',
          newChapter,
      }
  } catch (error) {
      throw error;
  }
  return result;
}

// const createChapter = async (title, description, url, category, chapter) => {
//   let result;
//   try {
//     const newChapter = new Chapter({
//       title,
//       description,
//       url,
//       category,
//       chapter,
//     });
//     await newChapter.save();
//     result = {
//       status: 201,
//       newChapter,
//     };
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
//   return result;
// };

const getChapter = async (category) => {
  let result;
  let criteria = {};
  try {
    if (category) {
      criteria.category = category;
    }
    const chapter = await Chapter.find(criteria);
    result = {
      status: 200,
      chapter,
    };
  } catch (error) {
    throw error;
  }
  return result;
};

const updateChapter = async (id) => {
  let result;
  const { title, description, url, category } = Serie;
  try {
    const chapter = await Chapter.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          description,
          url,
          category,
        },
      }
    );
    result = {
      status: 201,
      chapter,
    };
  } catch (error) {
    throw error;
  }
  return result;
};

const deleteChapter = async (id) => {
  let result;
  try {
    const chapter = await Chapter.findByIdAndDelete({ _id: id });
    result = {
      status: 201,
      chapter,
    };
  } catch (error) {
    throw error;
  }
  return result;
};

module.exports = {
  createChapter,
  getChapter,
  updateChapter,
  deleteChapter,
};
