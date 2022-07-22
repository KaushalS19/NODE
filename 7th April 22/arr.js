// var ar = [10,20,30,40,50,"kaushal","Node"];
// console.log(ar);

// ar.pop(); // remove last element
// console.log(ar);

// ar.push("Tech");  // add element in last index position of the arr
// console.log(ar);

// ar.shift()    // Shift the value of the array,means every shift operation; 1st value of the array is omited
// console.log(ar);
// ar.shift()
// console.log(ar);

// ar.unshift(70);
// console.log(ar);  // Add element from the first index position of the array

// var myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getMinutes());
// console.log(myDate.getMonth());
// console.log(myDate.getSeconds());
// console.log(myDate.getTime());

// var fname;
// class Base{
//     constructor(name){
//         fname = name;
//     }

//     static display(){
//         console.log(fname);
//     }
// }

// var myBase = new Base("Kaushal");
// // myBase.display();

// Base.display();

// ----------------------------------------------------------------------------------
// FAT arrow function

// display = () => {
//     console.log("Kaushal Sojitra");
// }

// display();

// Function call method: takes value in the string form

// var person = {
//     fullName : function(){
//         return this.fName + " " + this.lName;
//     }
// }

// var person1 = {
//     fName : "Kaushal",
//     lName : "Sojitra"
// }
// var person2 = {
//     fName : "Milan",
//     lName : "Bhadani"
// }

// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));



// Apply method: Takes value as in array form
// also, by this method we add parameters in the function which is showed in the form of city and country below:
// var person = {
//   fullName: function (city, country) {
//     return this.fName + " " + this.lName + " " + city + " " + country;
//   },
// };

// var person1 = {
//   fName: "Kaushal",
//   lName: "Sojitra",
// };
// var person2 = {
//   fName: "Milan",
//   lName: "Bhadani",
// };

// console.log(person.fullName.call(person1, "Surat", "India"));
// console.log(person.fullName.apply(person2, ["Surat", "India"]));


//Function Bind : For bind the value after function run

var person = {
  fullName: function (city, country) {
    return this.fName + " " + this.lName + " " + city + " " + country;
  },
};

var person1 = {
  fName: "Kaushal",
  lName: "Sojitra",
};
var person2 = {
  fName: "Milan",
  lName: "Bhadani",
};

var bound = person.fullName.bind(person1);
console.log(bound("Surat","India"));


