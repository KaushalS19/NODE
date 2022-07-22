const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose");
const CookieParser = require("cookie-parser");

mongoose
  .connect("mongodb://localhost:27017/E_Shoppers")
  .then(() => {
    console.log("DB connected successfully!!!");
  })
  .catch((err) => {
    console.log(err); 
  });
const bodyParser = require("body-parser");

const viewPath = path.join(__dirname, "../template/views");
const partialPath = path.join(__dirname, "../template/partials");
const publicpath = path.join(__dirname, "../public");
app.use(express.static(publicpath));
app.use(CookieParser());
hbs.registerPartials(partialPath);
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", viewPath);

app.listen(3000, (req, res) => {
  console.log("Server is running on Port 3000");
});

const userRouter = require("../router/userrouter");
app.use("/", userRouter);

const adminRouter = require("../router/adminrouter");
app.use("/", adminRouter);