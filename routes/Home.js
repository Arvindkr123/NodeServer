const express = require("express");
const fs = require("fs");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  fs.readFile("message.txt", (err, data) => {
    res.send(`
   ${data}
       <form action='/' onsubmit={document.getElementById('username').value=localStorage.getItem('username')} method='POST'> 
         <input type='text' id='message' name='message' placeholder='enter message...'/>
         <input type='hidden' id='username' name='username' />
         <button type='submit'>send</button>
       </form>
     `);
  });
});

homeRouter.post("/", (req, res) => {
  fs.writeFile(
    "message.txt",
    `${req.body.username} : ${req.body.message}\n`,
    { flag: "a" },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    }
  );
});

module.exports = homeRouter;
