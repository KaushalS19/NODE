const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')


const RegistrationSchema = new mongoose.Schema({
  userName: String,
  Email: String,
  Contact: Number,
  Password: String,
  Tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

RegistrationSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, "kaushaliskindperson");
    this.Tokens = this.Tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

RegistrationSchema.pre("save", async function (next) {
  if (this.isModified("Password")) {
    this.Password = await bcrypt.hash(this.Password, 10);
    next();
  }
});
module.exports = mongoose.model("Customer", RegistrationSchema);

