const express = require('express');
const bodyParser = require('body-parser');
var path = require ('path');

let app = express();

var friendData = require("../data/friends");

app.use(bodyParser.json());

module.exports = function (app) {

app.get("/api/friends", (req, res) => {
        res.json(friends);
    });


app.post("/api/friends", function (req, res) {

    });

};
