const path = require("path");

// console.log(path.dirname('/Users/macbook/Desktop/Node/PATH_Module/path.js'));
// console.log(path.basename('/Users/macbook/Desktop/Node/PATH_Module/path.js'));
// console.log(path.extname('/Users/macbook/Desktop/Node/PATH_Module/path.js'));
// console.log(path.parse('/Users/macbook/Desktop/Node/PATH_Module/path.js'));


const myPath = path.parse('/Users/macbook/Desktop/Node/PATH_Module/path.js');
console.log(myPath.root);
