const express = require("express");

const router = express.Router();

router.get("/addProduct", (req, res, next) => {
  console.log("in the another middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' placeholder='add product' name='title'/><input type='text' placeholder='enter size of product' name='size'/><button type='submit'>Add Product</button></form>"
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
