const express = require("express");
const api = express.Router();

const { userController } = require("../controllers");
const { isAuth } = require("../middlewares");
const { userSchema } = require("../controllers/schemas");

api.post("/login", userSchema, userController.login);
api.post("/register", userController.register);

api.get("/hi", isAuth, userController.Hello);

module.exports = api;
