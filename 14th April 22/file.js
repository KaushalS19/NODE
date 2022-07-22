const fs = require("fs");

const writeFile = (data) => {
  const allData = loadData();
  console.log(allData);
  const duplicate = allData.find((thedata) => {
    return thedata.title === data.title;
  });

  if (duplicate) {
    console.log("Duplicate title");
    return;
  }

  allData.push(data);

  const myData = JSON.stringify(allData);
  fs.writeFileSync("test.json", myData, (err) => {
    if (err) {
      console.log("Something went wrong..");
    } else {
      console.log("Done...");
    }
  });
};

const readFile = () => {
  const data = loadData();
  console.log(data);
};

function loadData() {
  try {
    const data = fs.readFileSync("test.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

const removetitle = (title) => {
  const allData = loadData();
  const data = allData.filter((thedata)=> {
    return thedata.title != title;
  })
console.log(data);


const myData = JSON.stringify(data);
fs.writeFileSync("test.json",myData,(err) => {
  if(err){
    console.log("something went wrong....");
  }

  console.log("Data inserted.....");
})
}
module.exports = { writeFile, readFile,removetitle };
