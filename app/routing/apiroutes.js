var matchData = require("../data/friends");
var fs = require("fs");

module.exports = function(app) {

    app.get("/api/matches", function(req, res) {
        res.json(matchData);
    });

    app.post("/api/friends", function(req, res) {

        var newSurvey = req.body;

        var friendListScoreCard = [];

        for (i = 0; i < matchData.length; i++) {
            var differenceScore = 0;
            for (j = 0; j < 10; j++) {

                var userScoreCard = newSurvey['scores[]'];


                var friendScoreCard = matchData[i].scores;

                differenceScore += Math.abs(parseInt(userScoreCard[j]) - matchData[i].scores[j]);
            }
            friendListScoreCard.push(differenceScore);
        }

        var min = Math.min.apply(null, friendListScoreCard);

        for (k = 0; k < friendListScoreCard.length; k++) {



            if (friendListScoreCard[k] == min) {
                var newFriendName = matchData[k].friendName;
                var newFriendPhoto = matchData[k].friendphoto;
                var bestFriend = {
                    newFriendName: newFriendName,
                    newFriendPhoto: newFriendPhoto
                }
                res.send(bestFriend);


            };

        };

    });
};