const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>");
  res.write("Welcome to first page!");
  res.write("</title>");
  res.write("</head>");
  res.write(`
          <body>
            <h1>Welcome to first Node.js page!!</h1>
          </body>
  `);
  res.write("</html>");
  res.end();
});

server.listen(3001, () => {
  console.log("listening on port 3001...");
});
