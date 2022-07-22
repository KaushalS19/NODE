const express = require("express");
const app = express();
const PORT = 3000;
const path = require('path');
const hbs = require('hbs');

const viewPath = path.join(__dirname,"../Template/view");
const publicPath = path.join(__dirname,"../public");


app.set("view engine","hbs");
app.set("views",viewPath);
app.use(express.static(publicPath))

app.get("/home",(req,res)=> {
	res.render("home");
})

app.get("*",(req,res)=> {
	res.render("error");
})

app.listen(PORT,(req,res)=> {
	console.log("Server 3000 running");
})

