const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const jwt = require("jsonwebtoken");

const RegisterSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  Tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

RegisterSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      process.env.SECRET_KEY
    );

    this.Tokens = this.Tokens.concat({ token: token });
  } catch (error) {
    response.status(404).send("Something went wrong..!!");
  }
};

RegisterSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
  }
  next();
});
module.exports = new mongoose.model("Employee", RegisterSchema);
