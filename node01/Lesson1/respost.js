var http = require('http');
var url = require('url');
var itil = require('util');

http.createServer(function(req,res){
	var post = '';
	req.on('data',function(str){
		post +=str;
	});
	req.on('end',function(){
		res.writeHead(200, {"Content-Type": "text/plain"});
    	res.write("You've sent: " + post);
	});
})
