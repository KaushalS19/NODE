const axios = require("axios");

const geoCode = (city, callback) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=2aed9811b92c4183ae98c219ba5f77fb`;

  axios
    .get(url)
    .then((result) => {
      var data = result.data.results[0].geometry;
      var lat = data.lat;
      var lng = data.lng;

      callback(undefined, {
        lat: lat,
        lng: lng,
      });
    })
    .catch((err) => {
      console.log("error" + err);
      callback(err);
    });
};

// geoCode("surat,gujarat");
module.exports = { geoCode };
