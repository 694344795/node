var express = require('express');
var app = express();

app.get('/', function(request, response){
	response.send('Hello World');
});

app.get('/customer', function(req, res){
  res.send('customer page');
});
app.get('/admin', function(req, res){
  res.send('admin page');
});

var server = app.listen(888, function(){
	console.log(server.address());
})