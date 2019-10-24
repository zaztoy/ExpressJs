var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RACINE' });
  console.log('je suis dans la racine');
});

module.exports = router;

