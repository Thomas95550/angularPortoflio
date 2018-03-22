/**
 * Created by PC on 09/02/2018.
 */
const express = require('express');
const router = express.Router();
const axios = require('axios');
const sgMail = require('@sendgrid/mail');
const MongoClient = require('mongodb').MongoClient;

/**
 *  GET Route "api/"
 **/
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
    res.send(req.body);
});

/**
 *  GET Route "api/project"
 **/
router.get('/project', function(req, res) {
    MongoClient.connect('mongodb://thomas:Sactepowa147@ds235328.mlab.com:35328/porfolio-angular', function(err, db) {
        if (err) {
            throw err;
        }
        db.collection('projects').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
        });
    });
});

/**
 * GET Route "api/about"
 **/
router.get('/about', function(req, res) {
    res.send(req.body);
});

/**
 *  GET Route "api/contact"
 **/
router.get('/contact', function(req, res) {
    res.send(req.body);
});

router.post('/contact', function (req, res) {
    console.log('Message posted');
    sgMail.setApiKey('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');
    const msg = {
        to: 'hazwow95@gmail.com',
        from: 'no-reply@contact-thomascacquevelle.fr',
        subject: 'Nouveau contact',
        templateId: 'd5c549c8-4bf9-4e5c-bf9b-a142c376f873',
        substitutionWrappers: ['{{', '}}'],
        substitutions: {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            mobile: req.body.mobile,
            message: req.body.message
        }
    };
    return sgMail.send(msg);
});

module.exports = router;
