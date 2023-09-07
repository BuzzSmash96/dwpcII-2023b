var express = require('express');
var router = express.Router();

// GET /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ITGAM', author:"Ricardo Cortes" });
});

module.exports = router;
