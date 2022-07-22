const jwt = require("jsonwebtoken");
const Student = require("../model/Studentmodel");
const cookieParser = require("cookie-parser");

const auth = async (req, resp, next) => {
  try {
    const token = req.cookies.jwt;
    const verified = await jwt.verify(token, "kaushaliskindperson");
    const student = await Student.findById({ _id: verified._id });

    req.student = student;
    req.token = token;
    next();
  } catch (err) {
    resp.render("login", { err: "Please login first ..!!" });
  }
};

module.exports = auth;
