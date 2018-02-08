const express = require('express');
const bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.text());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, () => {
    console.log('App is listening on port ' + port);
});