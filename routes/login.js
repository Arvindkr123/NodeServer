const express = require("express");
const loginRouter = express.Router();
const productRouter = express.Router();

loginRouter.get("/login", (req, res) => {
  res.send(
    `<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/product" method="POST">
        <input id="username" type="text" name"title">
        <button type="submit">add</button>
     </form>
  `
  );
});

productRouter.post("/product", (req, res) => {
  res.redirect("/");
});

module.exports = { loginRouter, productRouter };
