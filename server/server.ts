import mongoose from "mongoose"
mongoose.connect('mongodb://localhost:27017/recipes').catch(err => console.log(err));

//? const mongoose = require('mongoose')
//mongoose.connect('', {
//useUnifiedToopology : true,
//useNewUrlParser: true  
//}).then(console.log('connected'))
//
//



var express = require('express');
var app = express();
var PORT = 3000;
 
app.use(express.urlencoded({extended:false}));
   
app.post('/', function (req, res) {
    console.log(req.body);
    res.end();
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});