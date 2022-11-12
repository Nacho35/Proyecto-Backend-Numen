const { authService } = require("../services");
const User = require("../models/users");

const login = (req, res) => {
  res.status(200).send({ token: authService.createToken() });
};

const register = (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({
    email,
    password,
  });

  User.findOne({ email: newUser.email }, (error, user) => {
    if (error) {
      return res.status(500).send({
        message: "Se produjo un error al registrar el usuario",
        error,
      });
    }
    if (user) {
      return res
        .status(400)
        .send({ message: "El email ya se encuentra en uso" });
    }
    newUser.save((error) => {
      if (error) {
        res
          .status(400)
          .send({ message: "Se produjo un error al registrar el usuario" });
      }
      res.status(201).send({
        message: "El registro se completo exitosamente ",
        token: authService.createToken(),
      });
    });
  });
};

const Hello = (req, res) => {
  res.status(200).send("Hola Ya Estas Autenticado!");
};

module.exports = {
  login,
  register,
  Hello,
};
