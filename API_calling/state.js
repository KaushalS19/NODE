const axios = require("axios");

// const countryData = ()=> {
//     const url = `https://countriesnow.space/api/v0.1/countries/states`;

// axios
//   .get(url)
//   .then((result) => {
//     console.log(result.data.data.length);
//     for (i = 0; i < result.data.data.length; i++) {
//         var country = result.data.data[i].name;
//         // var capital = result.data.data[i].capital;
//       console.log(`
//       Country : ${country}; `);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// }

// countryData();

// const stateData = () => {
    const url = `https://countriesnow.space/api/v0.1/countries/states`;

axios
  .get(url)
  .then((result) => {
    // console.log(result.data.data[0].states.length);
    for (i = 0; i < result.data.data[6].states.length; i++) {
        // var country =  result.data.data[i].states;
        var state = result.data.data[6].states[i].name;
      console.log(`
      Country : ${state}; `);
    }
  })
  .catch((err) => {
    console.log(err);
  });

// }