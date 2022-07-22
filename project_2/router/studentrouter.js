const { response } = require("express");
const express = require("express");
const async = require("hbs/lib/async");
const router = express.Router();
const student = require("../model/formmodel");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/view", async (req, res) => {
  try {
    const data = await student.find();
    res.render("view",{"data":data}); 
  } catch (error) {
    console.log(error);
  }
});

router.get("/delete/:did",async(req,res)=> {
  const _id = req.params.did;
  try {
    const result = await student.findByIdAndDelete(_id);
    res.redirect("/view")
  } catch (error) {
    console.log(error);
  }
})
router.get("/update/:did",async(req,res)=> {
  const _id = req.params.did;
  try {
    const result = await student.findByIdAndUpdate(_id);
    res.redirect("/view")
  } catch (error) {
    console.log(error);
  }
})

router.post("/addStudent", async (req, res) => {
  try {
    const studentData = new student(req.body);
    const result = await studentData.save();
    res.render("index", { Success: "Data inserted Successfully..!!!" });
  } catch (error) {
    console.log(error);
    res.render("index");
  }
});


router.post("/update/addStudent", async (req, res) => {
  
  try {
    const studentData = new student(req.body);
    const result = await studentData.save();
    res.render("index", { Success: "Data inserted Successfully..!!!" });
  } catch (error) {
    console.log(error);
    res.render("index");
  }
});

module.exports = router;
