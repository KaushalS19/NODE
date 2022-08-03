const express = require("express");
const mongoose = require("mongoose");
const Router = require("../Router/facultyrouter");
const path = require("path");

const app = express();

mongoose
  .connect(`mongodb://127.0.0.1:27017/Tops`)
  .then(() => {
    console.log("Database connection established successfully...!!");
  })
  .catch((err) => console.log(err));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const viewPath = path.join(__dirname, "../Template/views");
app.set("view engine", "hbs");
app.set("views", viewPath);

app.use(express.json());
app.use("/", Router);

app.listen(3000, (req, resp) => {
  console.log("Server is running..!!");
});
