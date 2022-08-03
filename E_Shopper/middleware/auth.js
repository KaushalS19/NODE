const jwt = require("jsonwebtoken");
const Customer = require("../model/Registermodel");
const Admin = require("../model/Adminmodel");
const cookieParser = require("cookie-parser");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verified = await jwt.verify(token, "kaushaliskindperson");
    const customer = await Customer.findById({ _id: verified._id });
    
    next();
} catch (error) {
    res.send(error);
}
};
const adminAuth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verified = await jwt.verify(token, "kaushaliskindperson");
        const admin = await Admin.findById({ _id: verified._id });

    next();
  } catch (error) {
    res.send(error);
  }
};

module.exports = auth,adminAuth;
