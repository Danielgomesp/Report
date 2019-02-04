//CONNECTION
var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://danielgomesp:daniel32768600@kamino.mongodb.umbler.com:36898/reportsystemdb",
    function (err, conn) {
        if (err) return console.log(err);
        global.db = conn.db('reportsystemdb');
    })

function saveReport(operatorName, shift, date, report, callback) {
    global.db.collection("reportsystemdb").insert({ operatorName, shift, date, report }, function (err, result) {
        if (err) return console.log(err);
        callback();
    })

}

function findReport(callback) {
    global.db.collection("reportsystemdb").find().sort({ date: -1 }).toArray(function (err, docs) {
        if (err) return console.log(err);
        callback(docs);
    })
}


function deleteReport(id, callback) {
    let ObjectId = require('mongodb').ObjectID;
    global.db.collection("reportsystemdb").deleteOne({ _id: ObjectId(id)} , function (err, result){
        if(err) return console.log(err);
        callback();
    })
    
}

module.exports = { saveReport, findReport, deleteReport }