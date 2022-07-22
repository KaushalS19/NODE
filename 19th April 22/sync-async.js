const fs = require('fs');

// const data = fs.writeFileSync("test.txt","Kaushal Sojitra");
// // console.log(data);
// console.log("Data write operation successfully completed...");


// const asdata = fs.writeFile("text.txt","Kaushal Sojitra",(err) => {
//     console.log("Data write operation successfully completed...");
// });
// console.log("After method...");

const asdata = fs.readFile("text.txt","utf-8",(err,data) => {
    console.log(data);
});
console.log("After method...");

