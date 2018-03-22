// Get dependencies
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const api = require('./server/routes/api');
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var port = process.env.PORT || 4300;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, function() {
    console.log("App is running on port " + port);
});


/*app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});*/