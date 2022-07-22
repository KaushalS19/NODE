const axios = require("axios");

// const countryData = () => {};
const url = ``;

axios
  .get("https://restcountries.com/v3.1/all")
  .then((result) => {
    //console.log(result.data.length);
    for (var i = 0; i < result.data.length; i++) {
      console.log(result.data[i].name.common);
      console.log(result.data[i].capital[0]);
    }
  })
  .catch((err) => {
    console.log(err);
  });
