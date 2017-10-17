var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://192.168.199.135:27017/runoob'; 
 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.199.135:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});