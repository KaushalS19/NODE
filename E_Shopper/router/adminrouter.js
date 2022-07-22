const express = require("express");
const route = express.Router();
const Admin = require("../model/Adminmodel")
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth")


route.get("/admin",(req,resp)=>{
  resp.render("adminlogin")
})

route.get("/profile",(req,resp)=> {
  resp.render("profile")
})
route.get("/adminpage",(req,resp)=> {
  resp.render("adminpage")
})
route.get("/category",(req,resp) => {
  resp.render("category")
})
route.get("/product",(req,resp) => {
  resp.render("product")
})
route.get("/addCategory",(req,resp)=> {
  resp.render("addcategory")
})

route.post("/loginadmin",async (req,resp)=> {
    try {
        const userName = req.body.username;
        const pass = req.body.password;
        console.log(userName+" "+pass);
        const adminData = await Admin.findOne({ Username: userName });
        const token = await adminData.generateAuthToken();
        console.log(studentData.Password);
        resp.cookie("jwt",token,{
          expires : new Date(Date.now() + 1000000),
          httpOnly : true
        })
        const isMatch = await bcrypt.compare(pass, adminData.Password);
        console.log(isMatch);
        if (isMatch) {
          resp.redirect("admin");
        } else {
          resp.render("adminlogin", { err: "Invalid Username or Password" });
        }
        console.log(adminData);
        if(adminData.password === pass){
          resp.render("adminlogin")
        }else {
            resp.render("adminlogin", { err: "Invalid Username or Password" });
        }
      } catch (error) {
        resp.render("adminlogin", { err: "Invalid Username or Password" });
      }
});

route.get("/logout",auth,async(req,resp)=> {
    try {
      data.Admin.Tokens = req.admin.Tokens.filter((element) => {
        return element.token!=req.token;
      })
  
      // resp.student.Tokens = [];  // logout from all devices
  
      resp.clearCookie("jwt");
      req.admin.save();
      resp.render("adminlogin");
  
    } catch (error) {
        resp.render("admin");
    }
  })

 

  module.exports = route;
