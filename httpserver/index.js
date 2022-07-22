const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the Home sides Kaushal");
  } else if (req.url == "/about") {
    res.end("Hello from the AboutUs sides Kaushal");
  } else if (req.url == "/contact") {
    res.end("Hello from the ContactUs sides Kaushal");
  } else {
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1> error 404 - Page doesn't exist.. </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listning to the port number 8000");
});
