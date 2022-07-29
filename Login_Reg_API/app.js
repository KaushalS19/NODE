const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Router = require("./Router/router");

mongoose
  .connect("mongodb://127.0.0.1:27017/User")
  .then(() => {
    console.log("Database connection established successfully...!!");
  })
  .catch((err) => console.log(err));
  app.use(express.json());
  app.use("/", Router);

app.listen(3000, (req, resp) => {
  console.log("Server is Running...!!!"); 
});
