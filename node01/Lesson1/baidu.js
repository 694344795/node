var http = require('http');

function baidu(url, callback){
	 http.get(url, function(res){
	 	var data = '';
	 	res.on('data', function(chunk){
	 		data += chunk;
	 	});

	 	res.on('end', function(){
	 		callback(data);
	 	})
	 }).on('error', function(){
	 	callback(null);
	 })
};

exports.baidu = baidu;