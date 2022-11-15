const express = require("express");
const api = express.Router();

const { userController, animeController} = require("../controllers");
const { isAuth } = require("../middlewares");
const { userSchema } = require("../controllers/schemas");

api.post("/login", userSchema, userController.login);
api.post("/register", userController.register);

api.get("/hi", isAuth, userController.Hello);

///CRUD SERIES
api.get('/series', animeController.getSerie);
api.get('/series/:id', animeController.getSerie1);
api.post('/series', animeController.postSerie);
api.put('/series', animeController.putSerie);
api.delete('/series', animeController.deleteSerie);

module.exports = api