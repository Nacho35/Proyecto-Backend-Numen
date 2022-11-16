const express = require("express");
const api = express.Router();

const { userController, serieController } = require("../controllers");
const { isAuth } = require("../middlewares");
const { userSchema } = require("../controllers/schemas");

api.post("/login", userSchema, userController.login);
api.post("/register", userController.register);
api.post('/serie', serieController.createSerie);
api.get('/serie', serieController.getSerie);

api.get("/hi", isAuth, userController.Hello);

module.exports = api;
