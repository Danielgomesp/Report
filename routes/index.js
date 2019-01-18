var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Report System'});
});

/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Create New Report'});
});
module.exports = router;
 