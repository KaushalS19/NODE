const weather = require("./weatherdata");

const geoCodedata = require("./geocode");

const city = process.argv[2];
// console.log(city);

const getData = () => {
  geoCodedata.geoCode(city, (data) => {
    var lat = data.lat;
    var lng = data.lng;
    weather.getweatherData(lat, lng, (weather) => {
      console.log(`
        City name : ${weather.city}
        Lattitude : ${data.lat}
        Longitude : ${data.lng}
        Temperature : ${weather.temp}
        Pressure : ${weather.pressure}
        Humidity : ${weather.humidity}
      `);
    });
  });
};

getData();
