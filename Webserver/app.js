const express = require("express");
const path = require('path');
const app = express();
const PORT = 8000;


// console.log(path.join(__dirname,"home.html"));

app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname,"home.html"));
    // res.send("Welcome to home Kaushal Sojitra");
})
app.get("/about",(req,res)=> {
    // res.send("Welcome to about us page Kaushal Sojitra");
    res.json({
        "Name" : "Kaushal",
        "email": "kaushalsojitra@gmail.com",
        "age":"24"
    })
})
app.get("/contact",(req,res)=> {
    res.send("Welcome to contact us page Kaushal Sojitra");
})
app.get("*",(req,res)=> {
    res.send("404 - Page not Found");
})

app.listen(PORT,(req,res)=> {
    console.log(`Server running on PORT ${PORT} successfully`);
})