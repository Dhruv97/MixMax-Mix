var express = require('express');
var router = express.Router();
var cors = require('cors');

//Requires for spell-checker
var dictionary = require('dictionary-en-us');
var nspell = require('nspell');

/* GET home page. */
var watson = require('watson-developer-cloud');

var tone_analyzer = new watson.ToneAnalyzerV3({
    username: '963e8c57-83e1-4d30-9aac-3abc8ead6ad2',
    password: 'TyizUL7zJIIv',
    sentences: true,
    version: 'v3',
    version_date: '2016-05-19 ',
    sentences: true
});

router.get('/', function(req, res, next) {
    res.render('editor', { text: ""});

});


var corsOptions = {
    origin: /^[^.\s]+\.mixmax\.com$/,
    credentials: true
};

router.post('/resolver', cors(corsOptions), function(req, res, next) {
    var data = JSON.parse(req.body.params);
    var html = data.text;
    res.json({
        body: html,
        raw: true
    });
});


router.post('/', function(req, res, next) {
    
        res.render('editor', { text: req.body.text, emotionArray: emotionArray,languageArray: languageArray, socialArray: socialArray, numMisspelled: numMisspelled,ratio: ratio, numWords: numWords, coeff: coeff, color: color});
          

});

module.exports = router;
