const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

const AdminSchema = new mongoose.Schema({
  username : String,
  password : String,
  Tokens : [
    {
      token : {
        type : String,
      },
    },
  ],
});

AdminSchema.methods.generateAuthToken = async function () {
    try {
      const token = jwt.sign({ _id: this._id }, "kaushaliskindperson");
      this.Tokens = this.Tokens.concat({ token: token });
      await this.save();
      return token;
    } catch (error) {
      console.log(error);
    }
  };
  
  AdminSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    }
  });

module.exports = mongoose.model("Admin", AdminSchema);