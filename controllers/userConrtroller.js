const login = (req, res) => {
  res.status(200).send();
};

const register = (req, res) => {
  res.status(200).send();
};

const Hello = (req, res) => {
  res.status(200).send("Hola Ya Estas Autenticado!");
};

module.exports = {
  login,
  register,
  Hello,
};
