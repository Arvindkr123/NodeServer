const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("url of request ->>>>", req.url);
  // console.log("methods of request ->>>>> ", req.method);
  // console.log("headers of request ->>>>>>", req.headers);

  res.setHeader("Content-Type", "text/html");
  res.write(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>Hello From my Node js Server</h1>
    </body>
  </html>
  `);
  res.end();
});

server.listen(4000);
