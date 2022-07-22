const mongoose = require('mongoose');
const connection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/library").then(()=> {
    console.log("Connection established successfully...");
}).catch(err=> {
    console.log(err);
});
}

module.exports = connection;
