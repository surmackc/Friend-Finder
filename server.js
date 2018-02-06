const express = require('express');
const bodyParser = require('body-parser');
var path = require ('path');

let port = process.env.port || 3000;
let app = express();


app.use(bodyParser.json());


app.listen(port, () => {
    console.log('App is listening on port ' + port);
});
