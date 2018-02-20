const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
console.log("Route called")
// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'univDB';
var express = require('express');
var router = express.Router();

var tempRes;
// Add new school data
router.post('/addSchool', function (req, res, next) {
  var school = req.body;
  console.log(req.body);
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
      if (err) console.log(err);
      assert.equal(null, err);
      console.log("Connected successfully to server");

      const db = client.db(dbName);

      insertDocuments(db, school, function() {
        res.send(tempRes);
        client.close();
      });
    });
  
});

const insertDocuments = function(db, data, callback) {
  // Get the documents collection
  const collection = db.collection('schools');
  var query = {email:data.email};
  collection.find(query).toArray(function(err, docs){
    if(docs.length > 0){
      console.log("result already exist");    
      tempRes = "result already exist"  ;
    }
    else{
// Insert some documents
    collection.insertOne(data, function(err, result) {
      console.log(data)
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      assert.equal(1, result.ops.length);
      console.log("Inserted 1 document into the collection");
      callback(result);
    });
    }
  });
  
}


module.exports = router;