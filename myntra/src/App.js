const express = require('express');
const app = express();
const path = require("path");
const hbs = require("hbs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 3000;
const viewpath = path.join(__dirname, "../template/views");

app.set("view engine", "hbs");
app.set("views", viewpath);

app.listen(PORT, (req, res) => {
  console.log("Server running on PORT 3000");
});

const Router = require("../router/categoryrouter");
app.use("/", Router);


const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Myntra")
  .then(() => {
    console.log("Connection established successfully...");
  })
  .catch((err) => {
    console.log(err);
  });