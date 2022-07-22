const express = require("express");
const Route = express.Router();
const Student = require("../model/Studentmodel");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth")

Route.get("/", (req, resp) => {
  resp.render("login");
});
Route.get("/index", (req, resp) => {
  resp.render("index");
});

Route.post("/addStudent", async (req, resp) => {
  try {
    const student = new Student(req.body);
    const token = await student.generateAuthToken();
    // console.log("mytoken" + token);

    const result = await student.save();
    resp.render("index", { "success" : "Data Inserted successfully!!!" });
  } catch (error) {
    resp.render("index");
  }
});

Route.get("/view", auth,async (req, resp) => {
  try {
    const data = await Student.find();
    resp.render("display", { data: data });
  } catch (error) {
    console.log(error);
  }
});
Route.post("/login", async (req, resp) => {
  try {
    const email = req.body.Email;
    const pass = req.body.Password;
    const studentData = await Student.findOne({ Email: email });
    const token = await studentData.generateAuthToken();
    // console.log(studentData.Password);
    resp.cookie("jwt",token,{
      expires : new Date(Date.now() + 300000),
      httpOnly : true
    })
    const isMatch = await bcrypt.compare(pass, studentData.Password);
    // console.log(isMatch);
    if (isMatch) {
      resp.redirect("view");
    } else {
      resp.render("login", { err: "Invalid Username or Password" });
    }
  } catch (error) {
    resp.render("login", { err: "Invalid Username or Password" });
  }
});
Route.get("/delete/:did", async (req, resp) => {
  const _id = req.params.did;
  try {
    const result = await Student.findByIdAndDelete(_id);
    resp.redirect("/view");
  } catch (error) {
    console.log(error);
  }
});

Route.get("/update/:did", async (req, resp) => {
  const _id = req.params.did;
  try {
    const result = await Student.findById(_id);
    // console.log(result)
    resp.render("index", { data: result });
  } catch (error) { 
    console.log(error);
  }
});

Route.post("/update/addStudent", async (req, resp) => {
  // console.log(req.body.id);
  try {
    const result = await Student.findOneAndUpdate(req.body.id, req.body);
    resp.redirect("/view");
  } catch (error) {
    console.log(error);
  }
});

Route.get("/logout",auth,async(req,resp)=> {
  try {
    req.student.Tokens = req.student.Tokens.filter((element) => {
      return element.token!=req.token;
    })

    // req.student.Tokens = [];  // logout from all devices

    resp.clearCookie("jwt");
    req.student.save();
    resp.render("login");

  } catch (error) {
  
  }
})
module.exports = Route;
