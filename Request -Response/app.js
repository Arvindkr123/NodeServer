const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === "/home") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome home");
  } else if (path === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to About Us page");
  } else if (path === "/node") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my Node Js project");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
