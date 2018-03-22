// Get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const sgMail = require('@sendgrid/mail');
const api = require('./server/routes/api');
var app = express();


app.use('/api', api);

app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+'/dist'));

app.listen(process.env.PORT || 8080);

//Path Location Strategy
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'appclient/index.html'));
});

console.log('Console Listening');
