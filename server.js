var express = require('express');
var app = express();
var PORT = process.env.PORT;

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Server active. Listening on port ' + PORT);
});