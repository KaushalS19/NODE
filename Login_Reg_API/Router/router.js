const express = require("express");
const Route = express.Router();
const User = require("../model/usermodel");
const bcrypt = require("bcryptjs");

Route.post("/userRegistration", async (req, resp) => {
  try {
    const user = new User(req.body);

    const result = await user.save();
    resp.send(result);
  } catch (error) {
    resp.send(error);
  }
});

Route.post("/userLogin", async (req, resp) => {
  try {
    const Email = req.body.email;
    const Pass = req.body.password;

    const userData = await User.findOne({ email: Email });
    const isMatch = await bcrypt.compare(Pass, userData.password);

    if (isMatch) {
      resp.send(userData);
    } else {
      resp.send("Invalid credentials");
    }
  } catch (error) {
    resp.send("Something went Wrong..!!");
  }
});

module.exports = Route;
