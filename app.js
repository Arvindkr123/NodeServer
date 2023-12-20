const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/addProduct", (req, res, next) => {
  console.log("in the another middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' placeholder='add product' name='title'/><input type='text' placeholder='enter size of product' name='size'/><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in the another middleware");
  res.send("<h1>Welcome to ExpressJS!!</h1>");
});

app.listen(3001);
