const express = require("express");
const api = express.Router();

const {
  userController,
  serieController,
  chapterController,
} = require("../controllers");
const { isAuth } = require("../middlewares");
const { userSchema } = require("../controllers/schemas");

//! VERIFICAR PORQUE FALLA EN ROUTES DESDE chapterController //

api.post("/login", userSchema, userController.login);
api.post("/register", userController.register);
api.post("/serie", serieController.createSerie);
api.get("/serie", serieController.getSerie);
api.put("/serie/:id", serieController.updateSerie);
api.delete("/serie/:id", serieController.deleteSerie);
api.post("/chapter", chapterController.createChapter);
api.get("/chapter", chapterController.getChapter);
api.put("/chapter/:id", chapterController.updateChapter);
api.delete("/chapter/:id", chapterController.deleteChapter);

api.get("/hi", isAuth, userController.Hello);

module.exports = api;
