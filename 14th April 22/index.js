const { writeFile, fstat } = require("fs");
const yargs = require("yargs");

const file = require("./file");

yargs.command({
  command: "add",
  describe: "Add new file",
  builder: {
    title: {
      type: "String",
    },
    desc: {
      type: "String",
    },
  },
  handler: function (argv) {
    const title = argv.title;
    const desc = argv.desc;
    // console.log("title : ${title} and desc : ${desc}");
    let data = {
      title: title,
      desc: desc,
    };
    file.writeFile(data);
  },
});
yargs.command({
  command: "view",
  describe: "View all file",

  handler: function () {
    file.readFile();
  },
});
yargs.command({
  command: "remove",
  describe: "Remove all file",
  builder: {
    title: {
      type: "String",
    },
  },
  handler: function (argv) {
    let title = argv.title
    file.removetitle(title)
  },
});

console.log(yargs.argv);
