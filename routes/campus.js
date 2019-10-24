var express = require('express');
var router = express.Router();

/* GET campus page. */
router.get('/', function(req, res, next) {
  res.render('campus', { title: 'Campus heereeee' });
});

module.exports = router;
