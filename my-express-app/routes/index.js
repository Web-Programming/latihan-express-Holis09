var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// about

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'as about' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'as form' });
});

module.exports = router;
