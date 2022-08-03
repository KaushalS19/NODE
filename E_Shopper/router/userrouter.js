const express = require("express");
const route = express.Router();
const Customer = require("../model/Registermodel");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth")

// route.get("/LoginAdmin",(req,resp)=> {
//   resp.render("adminpage");
// })

route.get("/", async(req, res) => {
  try {
    const data = await Customer.find();
    res.render("index", { data: data });
  } catch (error) {
    console.log(error);
  }
});
route.get("/index", async(req, res) => {
  try {
    const data = await Customer.find();
    res.render("index", { data: data });
  } catch (error) {
    console.log(error);
  }
});
route.get("/shop", async(req, res) => {
  try {
    const data = await Customer.find();
    res.render("shop", { data: data });
  } catch (error) {
    console.log(error);
  }
});
route.get("/detail",async (req, res) => {
  try {
    const data = await Customer.find();
    res.render("detail", { data: data });
  } catch (error) {
    console.log(error);
  }
});
route.get("/checkout", async(req, res) => {
  try {
    const data = await Customer.find();
    res.render("checkout", { data: data });
  } catch (error) {
    console.log(error);
  }
});
route.get("/cart", async(req, res) => {
  try {
    const data = await Customer.find();
    res.render("cart", { data: data });
  } catch (error) {
    console.log(error);
  }
});
route.get("/contact", async(req, res) => {
  try {
    const data = await Customer.find();
    res.render("contact", { data: data });
  } catch (error) {
    console.log(error);
  }
});
route.get("/register", (req, res) => {
  res.render("register");
});
route.get("/login", (req, res) => {
  res.render("login");
});

route.post("/addCustomer",async (req,res)=> {
    const data  = req.body;
    //console.log(data);
    try {
      const customer = new Customer(req.body);

      const token = await customer.generateToken();
      // console.log(token);
      const result = await customer.save();
      console.log(result);
      res.render("register",{"success" : "You are successfully registered...!!!"})
    } catch (error) {
      console.log(error)
      res.render("register",{danger : "Sorry, something went wrong" })
    }
})

route.post("/login", async (req, res) => {
  try {
    const email = req.body.Email;
    const pass = req.body.Password;
    const customerData = await Customer.findOne({ Email: email });
    const token = await customerData.generateAuthToken();
    // console.log(studentData.Password);
    res.cookie("jwt",token,{
      expires : new Date(Date.now() + 1000000),
      httpOnly : true
    })
    const isMatch = await bcrypt.compare(pass, customerData.Password);
    console.log(isMatch);
    if (isMatch) {
      res.redirect("index");
    } else {
      res.render("login", { err: "Invalid Username or Password" });
    }
  } catch (error) {
    res.render("login", { err: "Invalid Username or Password" });
  }
});


route.get("/logout",auth,async(req,resp)=> {
  try {
    data.Customer.Tokens = req.customer.Tokens.filter((element) => {
      return element.token!=req.token;
    })

    // resp.student.Tokens = [];  // logout from all devices

    resp.clearCookie("jwt");
    req.customer.save();
    resp.render("login");

  } catch (error) {
  
  }
})
module.exports = route