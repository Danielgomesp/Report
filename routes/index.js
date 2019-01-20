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

/* POST new page. */
router.post('/new', function(req, res, next) {
  var operatorName = req.body.operatorName;
  var shift = req.body.shift;
  var date = req.body.date;
  var report = req.body.report;
  require("../db").saveReport(operatorName, shift, date, report, 
    function(){
    res.redirect('/');
  })
});

module.exports = router;