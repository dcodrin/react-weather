var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

//redirect to http from https
app.use(function (req, res, next) {
    if(req.headers['x-forwared-proto'] === 'http'){
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Server active. Listening on port ' + PORT + '.');
});