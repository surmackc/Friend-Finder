const express = require('express');
const bodyParser = require('body-parser');
var path = require ('path');

let app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"))
});

app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
});