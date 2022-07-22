const fs = require('fs');

// fs.writeFile("read.txt","Hey",(err) => {
//     console.log("File is created");
//     console.log(err);
// });

// we pass a function as an argument - a callback -
// that gets called when that task completes.
// The callback has an argument that tells you whether the operation completed successfully
// Now we need to say that to do when fs.writefile
// has completed (even if it's nothing), and start checking errors.

// fs.appendFile("read.txt"," how are you?", (err) => {
//     console.log("task completed");
// });


// fs.readFile("read.txt" , "utf8", (err,data) => {
//     console.log(data);
// });