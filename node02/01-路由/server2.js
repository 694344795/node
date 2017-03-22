var http = require('http');
var url = require('url');

function start(router){
	function onrequest(req,res){
		var pathname = url.parse(req.url).pathname;
		router(pathname);
		res.writehead(200,{"Content-Type":"text/plain"})
		res.write('hello world');
		res.end();
	}
	http.createServer(onrequest).listen(888);
	console.log("server");
}
exports.start = start;