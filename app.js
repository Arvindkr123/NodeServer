const app = require("express")();
const bodyParser = require("body-parser");
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: false }));

const { loginRouter, productRouter } = require("./routes/login");
const homeRouter = require("./routes/Home");

app.use(loginRouter);
app.use(productRouter);
app.use(homeRouter);

app.listen(8080);
