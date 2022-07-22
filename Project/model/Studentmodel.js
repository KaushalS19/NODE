const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const StudentsSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
  Tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

StudentsSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, "kaushaliskindperson");
    this.Tokens = this.Tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

StudentsSchema.pre("save", async function (next) {
  if (this.isModified("Password")) {
    this.Password = await bcrypt.hash(this.Password, 10);
    next();
  }
});

module.exports = mongoose.model("Student", StudentsSchema);
