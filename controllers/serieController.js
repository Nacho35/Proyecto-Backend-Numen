const { serieService } = require('../services');

const createSerie = async (req, res) => {
    try{
        const { title, description, url, category, chapter } = req.body;
        const result = await serieService.createSerie(title, description, url, category, chapter);
        res.status(result.status).send(result);
    }catch(error){
        res.status(500).send("Se produjo un error al crear el producto.");
    }
}

const getSerie = async (req, res) => {
    try{
        const { category } = req.query;
        const result = await serieService.getSerie(category);
        
        res.status(result.status).send(result);
    }catch(error){
        res.status(500).send("Se produjo un error al listar los productos.");
    }
}

module.exports = {
    createSerie,
    getSerie,
}