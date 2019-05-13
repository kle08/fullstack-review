const express = require("express");
const github = require("..helpers/github");
const db = require("../database/index.js").save; //
const bodyParser = require("body-parser"); // middle ware to help make the code readable
const cors = require("cors");

let app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors());

app.post("/repos", function(req, res) {
  // console.log(req.body);
  github.getReposByUsername(req.body.username, (err, response) => {
    if (err) {
      throw err;
    } else {
      var reposData = JSON.parse(response.body);
      db.save(reposData, err => {
        if (err) {
          throw err;
        }
        res.json("sucess");
      });
    }
  });

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get("/repos", function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.get25Repos((err, results) => {
    if (err) {
      throw err;
    } else {
      console.log("sucess");
      res.json(results);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
