const express = require("express");
const geocode = require("./util/geocode");
const weatherdata = require("./util/weatherdata");

const app = express();
const path = require("path");
const hbs = require("hbs");
const { response } = require("express");
const req = require("express/lib/request");
const PORT = 8000;

const viewpath = path.join(__dirname, "./Templates/views");
const partialpath = path.join(__dirname, "./Templates/partials");
const publicpath = path.join(__dirname, "./public");
// console.log(viewpath);
// console.log(publicpath);
app.use(express.static(publicpath));
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);

app.get("/", (req, res) => {
  res.render("index", { title: "Tops" });
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/weather", (req, res) => {
  var location = req.query.location;
  console.log(location);
  res.render("weather");
});
app.get("/getwdata", (req, res) => {
  var location = req.query.location;
 
  if (!location) {
    console.log("Location not found");
    return;
  }
  geocode.geoCode(location, (err, data) => {

    if (err) {
      console.log(err);
      return;
    }
    var lat = data.lat;
    var lng = data.lng;
    weatherdata.getweatherData(lat, lng, (data1) => {
        // console.log(`
        //   City name : ${location}
        //   Lattitude : ${lat}
        //   Longitude : ${lng}
        //   Temperature : ${data1.temp}
        //   Pressure : ${data1.pressure}
        //   Humidity : ${data1.humidity}
        // `);

        res.send({
            City_name : location,
          Lattitude : lat,
          Longitude : lng,
          Temperature : data1.temp,
          Pressure : data1.pressure,
          Humidity : data1.humidity
        })
      });
    
  });
});

app.listen(PORT, (req, res) => {
  console.log("Server running on PORT 8000");
});
