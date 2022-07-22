const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const PORT = 3000;

const viewPath = path.join(__dirname, "./templetes/views");
const partialpath = path.join(__dirname, "./templetes/partials");
const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));
//console.log(viewPath)
//console.log(publicPath);

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialpath);

app.get("/", (req, resp) => {
  resp.render("index", { title: "Tops" });
});

app.get("/home", (req, resp) => {
  resp.render("home");
});

app.get("/weather", (req, resp) => {
  resp.render("weather");
});

app.get("/getWdata", (req, resp) => {
  var location = req.query.location;
  console.log(location);
});

app.listen(PORT, (req, resp) => {
  console.log(`server running on port http://localhost:${PORT}`);
});
