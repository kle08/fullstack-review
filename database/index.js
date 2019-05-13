const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher");

// const db = mongoose.connection; //

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: { type: Number, unique: true },
  name: String,
  owner: String,
  html_url: String,
  forks: Number
});

let Repo = mongoose.model("Repo", repoSchema);

let save = (reposData, callback) => {
  var arrRepos = [];
  reposData.forEach(repo => {
    var newRepo = new Repo();
    newRepo.id = data.id;
    newRepo.name = data.name;
    newRepo.owner = data.owner.login;
    newRepo.html_url = data.html_url;
    forks = data.forks;
    arrRepos.push(newRepo);
  });
  Repo.insterMany(arrRepos, (err, results) => {
    callback(err, results);
  });
};
let get25Repos = callback => {
  Repo.find((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
    .lean()
    .sort({ name: -1 });
};

// module.exports.save = save; no need for this since you are exporting it out to server

module.exports = {
  save,
  get25Repos
};
