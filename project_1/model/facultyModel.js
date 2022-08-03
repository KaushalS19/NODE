const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Faculty", facultySchema);
