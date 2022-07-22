const express = require("express");
const async = require("hbs/lib/async");

const router = express.Router();
const Category = require("../model/categorymodel");
router.get("/", async (req, res) => {
  try {
    const cData = await Category.find();
    console.log(cData);
    res.render("product", { data: cData });
  } catch (error) {
    console.log(error);
  }
});

router.get("/category", async (req, res) => {
  try {
    const cData = await Category.find();
    res.render("category", { data: cData });
  } catch (error) {
    console.log(error);
    res.render("category");
  }
});

router.post("/addCategory", async (req, res) => {
  try {
    const _id = req.body.id;
    if (_id === "") {
      const category = new Category(req.body);
      const result = await category.save();
      const cData = await Category.find();
      res.render("product", {
        Success: "Category data inserted Successfully..!!!",
        data: cData,
      });
    } else {
      const result = await Category.findByIdAndUpdate(_id, req.body);
      const cData = await Category.find();
      res.render("category", {
        Success: "Category data inserted Successfully..!!!",
        data: cData,
      });
    }
  } catch (error) {
    console.log(error);
    res.render("category");
  }
});

router.get("/deleteData", async (req, res) => {
  try {
    //   console.log(req.body);
    const _id = req.query.did;
    const result = await Category.findByIdAndDelete(_id);
    const cData = await Category.find();
    res.render("category", {
      Success: "Category data deleted Successfully..!!!",
      data: cData,
    });
  } catch (error) {
    console.log(error);
    res.render("category");
  }
});

router.get("/updateData", async (req, res) => {
  try {
    //   console.log(req.body);
    const _id = req.query.did;
    const result = await Category.findById(_id);
    const cData = await Category.find();
    res.render("category", { data: cData, result: result });
  } catch (error) {
    console.log(error);
    res.render("category");
  }
});

// router.post("/updateData/addCategory", async (req, res)=>{
//     // console.log(req.body.id)
//     const _id = req.query.did;
//     try {
//         const result = await Category.findByIdAndUpdate(_id, req.body);
//         res.redirect("/category");
//     } catch (error) {
//         console.log(error)
//     }
// })
// router.get("/product", async (req, res) => {
//     try {
//         const data = await Category.find();
//         res.render("product",{"data":data});
//     } catch (error) {
//         console.log(error);
//     }
// });

module.exports = router;
