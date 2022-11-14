const { userService } = require("../services");
const User = require("../models/users");
const { validationResult } = require("express-validator");

const login = async (req, res) => {
  const { email, password } = req.body;

  const resultValidation = validationResult(req);
  const hasErrors = !resultValidation.isEmpty();

  if (hasErrors) {
    return res.status(400).send(resultValidation);
  }

  const result = await userService
    .login(email, password)
    .catch((error) => error);
  return res.status(result.status).send(result);
};

const register = async (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({
    email,
    password,
  });

  const resultValidation = validationResult(req);
  const hasErrors = !resultValidation.isEmpty();

  if (hasErrors) {
    return res.status(400).send(resultValidation);
  }

  const result = await userService
    .register(email, password, newUser.email)
    .catch((error) => error);
  return res.status(result.status).send(result);
};

const Hello = (req, res) => {
  return res.status(200).send("Hola mundo, estas autenticado!");
};

module.exports = {
  login,
  register,
  Hello,
};
