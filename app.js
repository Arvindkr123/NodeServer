const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(`
    <html>
      <head>
         <title>Enter Message</title>
      </head>
      <body>
        <form action="/message" method="POST">
           <input type="text" name="message" />
           <button type="sumit">send</button>
        </form>
      </body>
    </html>
    `);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Hello I am Dummy one");
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
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
