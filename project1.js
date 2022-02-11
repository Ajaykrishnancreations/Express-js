var express = require('express');  
var app = express();  

app.get('/get_datas', function (req, res) {  
    res.send('<p>Username: ' + req.query['name']+
            '</p><p>Phone No: '+req.query['phone']+
            '</p><p>Email-Id: '+req.query['email']+
            '</p><p>D.O.B : '+req.query['dob']+
            '</p><p>Address : '+req.query['address']);  
  
    //============================================
    var MongoClient = require('mongodb').MongoClient;  
    var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var dbo=db.db("membersdata");
//----------------
dbo.collection("membersdata").insertOne({
    name:req.query['name'],
    Phoneno:req.query['phone'],
    EmailID:req.query['email'],
    DOB:req.query['dob'],
    Address:req.query['address'],    
        },function(err,res){
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
