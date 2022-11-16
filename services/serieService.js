const Serie = require('../models/series');
const User = require('../models/users');

const createSerie = async (title, description, url, category, chapter) => {
    let result;
    try{
        const newSerie = new Serie({ title, description, url, category, chapter });
        await newSerie.save();
        result = {
            status: 201,
            message: "La Serie fue creada correctamente",
            newSerie
        }
    }catch(error){
        console.log(error);
        throw error;
    }
    return result;
}

const getSerie = async (category) => {
    let result;
    let criteria = {};
    try{
        if(category){
            criteria.category = category;
        }
        const series = await Serie.find(criteria);
        result = {
            status: 200,
            series,
        }
    }catch(error){
        throw error;
    }
    return result;
}

module.exports = {
    createSerie,
    getSerie,
};