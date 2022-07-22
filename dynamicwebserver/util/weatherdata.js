// Axios module is used for api calling.....

const axios = require("axios");

const getweatherData = (lat,lon,callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c78a76af15cc5843caa7b5f44e1623e&units=metric`; // put the link of the api

    axios.get(url).then((result) => {
    
        var city = result.data.name;
        var main = result.data.main;
        var temp = main.temp;
        var pressure = main.pressure;
        var humidity = main.humidity;

        callback({
          "city" : city,
          "temp" : temp,
          "pressure" : pressure,
          "humidity" : humidity
      })
        // console.log(`
        //     City : ${city}
        //     Temp : ${temp}
        //     Pressure : ${pressure}
        //     Humidity : ${humidity}
        //     `);
      }).catch((err) => {
        console.log("Error..");
      })
}

module.exports = {getweatherData};