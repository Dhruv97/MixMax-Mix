var express = require('express');
var router = express.Router();
var cors = require('cors');
const util = require('util');
var jsdom = require('jsdom');
var $ = null;

jsdom.env(
 "http://localhost:3000/",
 function (err, window) {
   $ = require('jquery')(window);
 }
);
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId : '82addd6a92fd4f47bb4aa641b82b3d93',
    clientSecret : '30ce371b2c9942a48f8de3a36f9dbc43',
    redirectUri : 'http://localhost:8888/callback'
});

// Get an access token and 'save' it using a setter
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token is ' + data.body['access_token']);
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

router.get('/', function(req, res, next) {
    res.render('editor', { text: "", id: ""});

});

let spotifyAPIURL = "https://api.spotify.com/v1/search";

var corsOptions = {
    origin: /^[^.\s]+\.mixmax\.com$/,
    credentials: true
};

router.post('/resolver', cors(corsOptions), function(req, res, next) {
    var data = JSON.parse(req.body.params);
    var html = '<iframe id="playlist" width="300" height="380" frameborder="0" allowtransparency="true" src="' + data.src + '"></iframe>'
    res.json({
        body: html
    });
});


router.post('/', function(req, res, next) {
        
        let text = req.body.text;
       let artists = text.split(",");
       spotifyApi.searchPlaylists(artists)
        .then(function(data) {
            let first_item = data.body.playlists.items[0];
            let id = first_item.id;
            let owner = first_item.owner.id;
            console.log(first_item);
            res.render('editor', {text: text, id: `https://open.spotify.com/embed/user/${owner}/playlist/${id}`});
        }, function(err) {
            console.log('Something went wrong!', err);
        });

});

module.exports = router;

