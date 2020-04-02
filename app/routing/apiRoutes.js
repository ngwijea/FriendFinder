var friendFind = require('../data/friends.js');

module.exports = function(app) {

// A GET to display a JSON of all possible friends
    app.get("/api/friends", function(req, res) {
      res.json(friendFind);
    });
  
    // A POST to handle incoming survey results and check for compatibility.
    app.post("/api/friends", function(req, res) {

var user = req.body
var mostCompatible = {}
var mostCompatibleScore = 100;

for (var i = 0; i < friendFind.length; i++) {
  var closeness = 0;

  for (var i2 = 0; i2 < user.scores.length; i2++) {
      totalDiff += Math.abs(user.scores[i2] - friendFind[i].scores[j]);
  }

  if (closeness < mostCompatibleScore) {
    mostCompatible = friendFind[i];
    mostCompatibleScore = closeness;
  }
}

friendFind.push(user);
res.json(mostCompatible);

});

};