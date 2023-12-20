const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next(); // allow the request to continue the other middleware with help of next
});

app.use((req, res, next) => {
  console.log("in the another middleware");
  res.send("<h1>Welcome to ExpressJS!!</h1>");
});

const server = http.createServer(app);
server.listen(3001);
