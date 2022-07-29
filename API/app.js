const axios = require('axios');

const url = `http://192.168.29.147:3000/viewProduct`;

axios
  .get(url)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });