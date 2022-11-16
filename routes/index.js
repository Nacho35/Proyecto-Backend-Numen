const express = require("express");
const api = express.Router();

const { userController, seriesController, chapterController } = require("../controllers");
const { isAuth }  = require("../middlewares");
const  { userSchema }  = require("../controllers/schemas");

api.post("/login", userSchema, userController.login);
api.post("/register", userController.register);

api.get("/hi", isAuth, userController.Hello);

///CRUD SERIES
api.get('/series', seriesController.getSerie);
api.get('/series/:id?', seriesController.getSerie1);
api.post('/series', seriesController.postSerie);
api.put('/series/:id', seriesController.putSerie);
api.delete('/series/:id', seriesController.deleteSerie);

///CRUD CHAPTERS
api.get('/chapters', chapterController.getChapter);
api.get('/chapters/:id?', chapterController.getChapter1);
api.post('/chapters', chapterController.postChapter);
api.put('/chapters/:id', chapterController.putChapter);
api.delete('/chapters/:id', chapterController.deleteChapter);

module.exports = api