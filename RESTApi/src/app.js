const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/erp")
  .then(() => {
    console.log("Database connection successfully established......!");
  })
  .catch((error) => {
    console.log(error);
  });

const employeeSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Dept: String,
  Salary: Number,
});

const employeeData = new mongoose.model("employeeData", employeeSchema);

app.post("/employees", async (req, res) => {
  // console.log("Post request calling....");
  // console.log(req.body);
  try {
    const addEmployee = new employeeData(req.body);
    const result = await addEmployee.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.get("/employees", async (req, res) => {
  try {
    const result = await employeeData.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.get("/employees/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await employeeData.find({ _id });
    res.send(result);
  } catch (error) {
    console.log("Id Not Found...!!!");
  }
  // console.log(_id);
});

app.delete("/employees/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await employeeData.findByIdAndDelete(_id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.put("/employees/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await employeeData.findByIdAndUpdate(_id, req.body);
    res.send(result);
  } catch (error) {
    console.log("Data not Updated...!!!");
  }
});

app.patch("/employees/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await employeeData.findByIdAndUpdate(_id, req.body);
    res.send(result);
  } catch (error) {
    console.log("Data not Updated...!!!");
  }
});

app.get("*", (req, res) => {
  res.status(404).send("Invalid API !!!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on PORT ${PORT}`);
});
