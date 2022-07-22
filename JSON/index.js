const fs = require("fs");

const bioData = {
  name: "Kaushal Sojitra",
  age: 24,
};

// console.log(bioData.name);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData.age);

const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json",jsonData,(err) => {
//     console.log("Done");
// });
fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data);
  const oriData = JSON.parse(data);
  console.log(oriData);
});
