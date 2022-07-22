const axios = require("axios");

const url = `https://countriesnow.space/api/v0.1/countries/capital`;

axios
  .get(url)
  .then((result) => {
    console.log(result.data.data.length);
    for (i = 0; i < result.data.data.length; i++) {
        var country = result.data.data[i].name;
        var capital = result.data.data[i].capital;
      console.log(`
      Country : ${country};
      Capital : ${capital}; `);
    }
  })
  .catch((err) => {
    console.log(err);
  });
