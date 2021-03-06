var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        // user input object
        var userInput = req.body;
        // user input scores
        var userScore = userInput.scores;
        // find match
        var matchName = '';
        var matchPhoto = '';
        var totalDifference = 1000

        // looking at all friends in list
        for (var i = 0; i < friendData.length; i++) {
            // calculate differences for each question
            var diff = 0;
            for (var j = 0; j < userScore.length; j++) {
                diff += Math.abs(friendData[i].scores[j] - parseInt(userScore[j]))
            }
            // if lowest difference, record the friend match
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friendData[i].name;
                matchPhoto = friendData[i].url;
            }
        }
        // push new data to friendsArray
        friendData.push(userInput);
        // send correct response
        res.json({
            status: 'OK',
            matchName: matchName,
            matchPhoto: matchPhoto
        });





    });

};