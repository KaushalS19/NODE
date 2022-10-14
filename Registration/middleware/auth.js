const jwt = require("jsonwebtoken");
const Register = require("../models/Register");

const auth = async (req, resp, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);

    const user = await Register.findOne({ _id: verifyUser._id });

    next();
  } catch (error) {
    resp.status(404).send(error);
  }
};

module.exports = auth;
