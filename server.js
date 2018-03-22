// Get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const sgMail = require('@sendgrid/mail');

const api = require('./server/routes/api');

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.thomascacquevelle.fr');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// API location
app.use('/api', api);

app.use( express.static(__dirname + '/appclient' ) );
// Send all other requests to the Angular app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'appclient/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);


const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));