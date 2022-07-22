const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    categoryId : Object,
    productName : String,
    productPrice : Number,
    qty : Number,
    image : String,
})

module.exports = mongoose.model("Product",ProductSchema);