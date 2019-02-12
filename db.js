//CONNECTION
let selectCollection = 'report';
dbPassword = 'mongodb://danielgomesp:daniel32768600@kamino.mongodb.umbler.com:36898/reportsystemdb';

var mongoClient = require("mongodb").MongoClient;
mongoClient.connect(dbPassword,
    function (err, conn) {
        if (err) return console.log(err);
        global.db = conn.db('reportsystemdb');
    })

function saveReport(operatorName, shift, date, report, callback) {
    global.db.collection(selectCollection).insert({ operatorName, shift, date, report }, function (err, result) {
        if (err) return console.log(err);
        callback();
    })

}

function findReport(callback) {
    global.db.collection(selectCollection).find().sort({ date: -1 }).toArray(function (err, docs) {
        if (err) return console.log(err);
        callback(docs);
    })
}

function searchReport(id, callback) {
    let ObjectId = require('mongodb').ObjectID;
    global.db.collection(selectCollection).findOne({ _id: ObjectId(id) }, function (err, result) {
        if (err) return console.log(err);
        callback(result);
    })
}


function deleteReport(id, callback) {
    let ObjectId = require('mongodb').ObjectID;
    global.db.collection(selectCollection).deleteOne({ _id: ObjectId(id) }, function (err, result) {
        if (err) return console.log(err);
        callback();
    })

}

function updateReport(id, newReport, callback) {
    let ObjectId = require('mongodb').ObjectID;
    global.db.collection(selectCollection).updateOne({ _id: ObjectId(id) }, {
        $set: {
            report: newReport
        }
    }, function (err, result) {
        if (err) return console.log(err);
        callback();
    })
}

module.exports = { mongoURI: dbPassword, saveReport, findReport, deleteReport, updateReport, searchReport }