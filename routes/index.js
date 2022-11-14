const express = require("express");
const routes = express.Router();

const { animeController } = require("../controllers");
// const { isAuth } = require("../middlewares");
// const { userSchema } = require("../controllers/schemas");

routes.get('/series', animeController.getSerie);
routes.get('/series/:id', animeController.getSerie1);
routes.post('/series', animeController.postSerie);
routes.put('/series', animeController.putSerie);
routes.delete('/series', animeController.deleteSerie);

module.exports = routes