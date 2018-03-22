// Get dependencies
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const api = require('./server/routes/api');
const express = require('express');
const app = express();
const path = require('path');


// Set our api routes
app.use('/api', api);
app.use(express.static(__dirname+'/dist'));

app.listen(process.env.PORT || 8080);

//Path Location Strategy
app.get('*', function (req, res) {
    const index = path.join(__dirname, 'appclient', 'index.html');
    res.sendFile(index);
});

console.log('Console Listening');