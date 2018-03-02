
var matchData = require("../data/friends");
var fs = require("fs");

module.exports = function(app) {

  app.get("/api/matches", function(req, res) {
    res.json(matchData);
    console.log(surveyData)
  });

	app.post("/api/friends", function(req, res) {

		var newSurvey = req.body;

		var friendListScoreCard = [];

		for (i = 0; i < matchData.length; i++) {
			var differenceScore = 0;
			for (j = 0; j < 10; j++) {

        var userScoreCard = newSurvey['scores[]'];
        // console.log(userScoreCard)
        // console.log(newSurvey)
        
				var friendScoreCard = matchData[i].scores;
      
				differenceScore += Math.abs(parseInt(userScoreCard[j]) - matchData[i].scores[j]);
			}
			friendListScoreCard.push(differenceScore);
		}

		var min = Math.min.apply(null, friendListScoreCard);
		// var max = Math.max.apply(null, friendListScoreCard);
		for (k = 0; k < friendListScoreCard.length; k++) {


// FIX THESE NAMES VARIABLES
			if (friendListScoreCard[k] == min) {
				var newFriendName = matchData[k].friendName;
				var newFriendPhoto = matchData[k].friendphoto;
				var bestFriend  = {
          newFriendName: newFriendName
          
        }
        res.send(bestFriend);
        console.log(newFriendName + "this is line 43")

      };
      
		};

	});
};



  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

