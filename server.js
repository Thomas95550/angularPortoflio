// Get dependencies
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const api = require('./server/routes/api');


const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname+'/dist'));

app.listen(process.env.PORT || 8080);

//Path Location Strategy
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

console.log('Console Listening');


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