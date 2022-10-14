const jwt = require("jsonwebtoken");
const User = require("../model/usermodel");

const auth = async (req, resp, next) => {
  try {
    const token = req.cookies.jwt;
    const verified = await jwt.verify(token, "thisisthekey");
    const user = await User.findById({ _id: verified._id });
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    resp.render("login", { error: "Please login First...!!!" });
  }
};

// const auth = async (req, resp, next) => {
//   try {
//     const token = req.cookies.jwt;
//     const verified = await jwt.verify(token, "kaushaliskindperson");
//     const student = await Student.findById({ _id: verified._id });

//     req.student = student;
//     req.token = token;
//     next();
//   } catch (err) {
//     resp.render("login", { err: "Please login first ..!!" });
//   }
// };
