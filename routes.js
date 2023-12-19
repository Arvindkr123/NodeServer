const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    return fs.readFile("message.txt", "utf8", (err, data) => {
      console.log(data);
      res.write(`
     <html>
     <head>
     <title>Enter Message</title>
     </head>
     <body>
       <form action="/message" method="POST">
       ${data}
          <input type="text" name="message" />
          <button type="sumit">send</button>
          </form>
          </body>
          </html>
          `);
      return res.end();
    });
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      // console.log(parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
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
};

module.exports = requestHandler;