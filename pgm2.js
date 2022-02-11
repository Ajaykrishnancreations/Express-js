var express = require('express');  
var app = express();  

app.get('/get_pgm2', function (req, res) {  
    res.send('<p>Username: ' + req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>');  
  
    //============================================
    var MongoClient = require('mongodb').MongoClient;  
    var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var dbo=db.db("testconnection");
var myobj={rno:5,name:"ajai",mark:36};
dbo.collection("testconnection").insertOne({firstname:req.query['first_name'],lastname:req.query['last_name']},function(err,res){
    if(err) throw err;
    console.log("successfully inserted");
db.close();  
});  
});  
    //============================================
  
  })  

var server = app.listen(3000, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  
