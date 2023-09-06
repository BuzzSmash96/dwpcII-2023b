var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Itgam', author: "Ricardo Cortes" });
});

module.exports = router;
