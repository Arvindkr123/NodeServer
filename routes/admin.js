const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("in the another middleware");
  res.send(
    "<form action='/admin/add-product' method='POST'><input type='text' placeholder='add product' name='title'/><input type='text' placeholder='enter size of product' name='size'/><button type='submit'>Add Product</button></form>"
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
