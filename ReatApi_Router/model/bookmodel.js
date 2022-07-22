const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    BookName: {
        type:String,
        required:true
    },
    Price: Number,
    Qty: Number,
})

module.exports = mongoose.model("Book",bookSchema);