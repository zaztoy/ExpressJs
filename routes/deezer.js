var express = require('express');
var request = require('request')
var router = express.Router();

/* GET deezer page. */
router.get('/', function(req, res, next) {
  res.render('deezer', { title: 'Deezer' });
});

module.exports = router;

router.get('/search/:name', function(req, res, next) {
    let choice = req.params;
    const url = 'https://api.deezer.com/search?q=' + choice;
     request(url, function (error, res, body) {
        res.send(body)
    });
  });
  
  module.exports = router;
  