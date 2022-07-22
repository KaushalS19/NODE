const fs = require("fs");

// fs.mkdir("Kaushal", (err) => {
//     console.log("Kaushal named folder successfully created");
// });

// fs.writeFile("bio.txt","Kaushal is lived in Surat", (err) => {
//     console.log("File written successfully...");
// });

// fs.appendFile("bio.txt"," which is located in Gujarat", (err) => {
//     console.log("Append file successfully....");
// });

// fs.readFile("bio.txt","utf8", (err,data) => {
//     console.log("Read file successfully....");
//     console.log(data);
// });

// fs.rename("bio.txt","mybio.txt" , (err) => {
//     console.log("File name changed successfully...");
// });

// fs.unlink("mybio.txt", (err) => {
//     console.log("file removed successfully....");
// });

fs.rmdir('./Kaushal' , (err) => {
    console.log("Folder deleted successfully....");
});