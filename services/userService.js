const authService = require("./authService");
const User = require("../models/users");
const newUser = require("../controllers/userController");

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email }, (error, user) => {
      if (error) {
        reject({
          status: 500,
          message: "Se produjo un error al iniciar sesión.",
          error,
        });
      }
      if (!user || !password || !user.comparePassword(password)) {
        reject({
          status: 401,
          message: "El usuario o clave no son correctos.",
          error,
        });
      }
      resolve({
        status: 200,
        message: "Te has logueado correctamente",
        token: authService.createToken(),
      });
    });
  });
};

const register = () => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: newUser.email }, (error, user) => {
      if (error) {
        reject({
          status: 500,
          message: "Se produjo un error al registrar el usuario.",
          error,
        });
      }
      if (user) {
        reject({
          status: 400,
          message: "El email ya se encuentra en uso.",
        });
      }
      newUser.save((error) => {
        if (error) {
          reject({
            status: 400,
            message: "Se produjo un error al registrar el usuario.",
            error,
          });
        }
        resolve({
          status: 201,
          message: "El registro se completo exitosamente",
          token: authService.createToken(),
        });
      });
    });
  });
};

module.exports = {
  login,
  register,
};

// PROBLEMA EN EL  newUser.save SERVER DICE IS NOT A FUNCTION