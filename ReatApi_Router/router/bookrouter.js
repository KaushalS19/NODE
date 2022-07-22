const express = require("express");
const async = require("hbs/lib/async");
const router = express.Router();
const Book = require("../model/bookmodel");

router.get("/",async (req, res) => {
  try {
     const result =  await Book.find();
     res.send(result);
  } catch (error) {
      res.send(error)
  }
});

router.post("/", async (req, res) => {
    console.log(req.body);
  try {
    const book = new Book(req.body);
    console.log(book);
    const result = await book.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id",async (req, res) => {
    const _id = req.params.id;
    try {
        const result =  await Book.find(_id);
        res.send(result);
     } catch (error) {
         res.send(error)
     }
});

router.delete("/:id", async(req, res) => {
    const _id = req.params.id;
    try {
        const result =  await Book.findByIdAndDelete(_id);
        res.send(result);
     } catch (error) {
         res.send(error)
     }
});

router.put("/:id", async(req, res) => {
    const _id = req.params.id;
    try {
        const result =  await Book.findByIdAndUpdate(_id,req.body);
        res.send(result);
     } catch (error) {
         res.send(error)
     }
});

module.exports = router;
