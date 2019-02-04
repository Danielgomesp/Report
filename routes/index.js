var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  require('../db').findReport(function (docs) {
    res.render('index', { title: 'Report System', report: docs });  //objeto report recebe os dados de docs. Objeto title recebe titulo 
  })

});

/* GET new page. */
router.get('/new', function (req, res, next) {
  res.render('new', { title: 'Create New Report' });
});


/* POST complete page. */
router.post('/complete', function (req, res, next) {
  let report = req.body.report;
  let operatorName = req.body.operatorName;
  let shift = req.body.shift;
  let date = req.body.date;
  let id = req.body.id;
  res.render('complete', { title: 'Complete Report', report: report, operatorName: operatorName, shift: shift, date: date, id: id });
});

/* POST complete/delete page. */
router.post('/complete/delete', function (req, res, next) {
  let id = req.body.id;
  require('../db').deleteReport(id,
    function () {
      res.redirect('/');
    });
});

/* POST complete/update page. */
router.post('/complete/update', function (req, res, next) {
  let id = req.body.id;
  let report = req.body.report;
  require('../db').updateReport(id,
    function () {
      res.redirect('/');
    });
});


/* POST new page. */
router.post('/new', function (req, res, next) {
  var operatorName = req.body.operatorName;
  var shift = req.body.shift;
  var date = req.body.date;
  var report = req.body.report;
  require("../db").saveReport(operatorName, shift, date, report,
    function () {
      res.redirect('/');
    })
});

module.exports = router;