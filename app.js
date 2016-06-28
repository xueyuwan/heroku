var express = require('express');
var path = require('path');
var app = express();
var bodyparser = require('body-parser');

app.use(function(req,res,next){
   var name = req.params;
  res.json(name);
});
app.use(bodyparser());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT ||3001,function(){
  console.log("server listening ");
});
module.exports = app;
