const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("this is always run....");
});

app.use("/addProduct", (req, res, next) => {
  console.log("in the another middleware");
  res.send("<h1>Welcome to 'Add Product' !!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("in the another middleware");
  res.send("<h1>Welcome to ExpressJS!!</h1>");
});

app.listen(3001);
