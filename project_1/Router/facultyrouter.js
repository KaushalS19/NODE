const express = require("express");
const async = require("hbs/lib/async");
const Route = express.Router();
const Faculty = require("../model/facultyModel");

Route.get("/", (req, resp) => {
  resp.render("index");
});
Route.get("/register", (req, resp) => {
  resp.render("signup");
});
Route.post("/signUp", async (req, resp) => {
  try {
    console.log(req.body);
    const faculty = new Faculty(req.body);
    const result = await faculty.save();
    resp.render("signup", { success: "Data inserted successfully..!!" });
  } catch (error) {
    console.log(error);
  }
});

Route.post("/login", async (req, resp) => {
  try {
        const Email = req.body.email;
        const Password = req.body.password;
        const data = ;
  } catch (error) {
      console.log(error);
  }
});

module.exports = Route;
