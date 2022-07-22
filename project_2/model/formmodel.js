const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Password: String
});

module.exports = mongoose.model("studentForm", formSchema);
