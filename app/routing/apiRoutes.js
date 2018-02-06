const express = require('express');
const bodyParser = require('body-parser');
var path = require ('path');

let app = express();

app.use(bodyParser.json());


app.post("/api/friends", function (req, res) {

});




app.get("/api/friends", (req, res) => {
        res.json(friends);
    });


