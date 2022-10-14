require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;
const Register = require("../models/Register");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database connection successfully established..!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const viewPath = path.join(__dirname, "../Templates/views");
const partialPath = path.join(__dirname, "../Templates/Partials");
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.get("/", (req, resp) => {
  resp.render("index");
});
app.get("/register", (req, resp) => {
  resp.render("register");
});
app.get("/login", (req, resp) => {
  resp.render("login");
});
app.get("/secret", auth,(req, resp) => {
  resp.render("secret");
});

// register user

app.post("/register", async (req, resp) => {
  try {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password === confirmPassword) {
      const newUser = new Register({
        username: req.body.username,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
      });

      const token = await newUser.generateAuthToken();
      // cookie parser
      resp.cookie("jwt", token, {
        expires: new Date(Date.now() + 10000),
        httpOnly: true,
      });

      const user = await newUser.save();
      resp.status(201).send("index");
    } else {
      resp.send("Passwords are not same..!!");
    }
  } catch (error) {
    resp.status(404).send(error);
  }
});

app.post("/login", async (req, resp) => {
  try {
    const email = req.body.email;
    const Password = req.body.password;

    const userData = await Register.findOne({ email: email });
    const isMatch = await bcrypt.compare(Password, userData.password);

    const token = await userData.generateAuthToken();

    if (isMatch) {
      resp.status(201).render("index");
    } else {
      resp.send("Invalid Credentials..!!");
    }
  } catch (error) {
    resp.status(404).send(error);
  }
});

app.listen(port, () => {
  console.log("Server is Running..!!");
});
