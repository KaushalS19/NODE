const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const PORT = 3000;
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

mongoose
  .connect("mongodb://localhost:27017/TopsStudents")
  .then(() => {
    console.log("DB connected successfully!!!");
  })
  .catch((err) => {
    console.log(err);
  });
const bodyParser = require("body-parser");
const viewPath = path.join(__dirname, "../templetes/views");
app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const Router = require("../router/router");

app.use("/", Router);

app.listen(PORT, (req, resp) => {
  console.log(`server running on port ${PORT}`);
});
