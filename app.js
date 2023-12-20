const http = require("http");
const routes = require("./routes");
const server = http.createServer(routes);

server.listen(3001, () => {
  console.log("listening on port 3001...");
});

