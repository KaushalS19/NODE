const express = require('express');
const { append } = require('express/lib/response');
const connection = require('../util/connection');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
    mongoose.connect("mongodb://127.0.0.1:27017/library").then(()=> {
    console.log("Connection established successfully...");
}).catch(err=> {
    console.log(err);
});


app.listen(PORT,(req,res)=> {
    console.log("Server is running on the port 3000...!!!");
})
app.use(express.json());
const BookRouter = require("../router/bookrouter");
app.use("/book",BookRouter);