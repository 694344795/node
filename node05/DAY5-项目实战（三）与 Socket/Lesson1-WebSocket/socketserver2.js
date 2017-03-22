var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req.res){
	var file = null,type = "text/html";
	if (req.url == "/") {
		file = "index.html";
	} else if (/^\/(\w+(?:\.min)?\.(?:js|html|proto))$/.test(req.url)){
		file = req.url.substring(1);
		if (/\.js$/.test(file)) {
			type = "text/javascript";
		}
	}
	if (file) {
		fs.readFile(path.join(__dirname,file),function(err,data){
			if (err) {
				res.writeHead(500,{
					"Content-Type":type
				});
				res.end("Internal Server Error:"+err);
			}else{
				res.writeHead(200,{
					"Content-Type":type
				});
				res.write(data);
				res.end();
				console.log("Server www/"+ file);
			}
		});
	}else{
		res.writeHead(404,{
			"Content-Type":"text/html";
		});
		res.end("not found");
	}
});
server.listen(88);
server.on("listening",function(){
	console.log("server started");
});

var socketServer = require('ws').Server;
var wss = new socketServer({
	server:server
});

wss.on('connection',function(ws){
	ws.on('message',function(jsonstr,flags){
		var obj = eval('('+jsonstr+')');
		this.user = obj;
		if (typeof this.user.message !="undefined") {
			wss.broadcast(1,obj);
		}
	});
	ws.on('close',function(cloes){
		try{
			wss.broadcast(0,this.user);
		}catch(e){
			console.log("页面刷新");
		}
	});
});

//广播
wss.broadcast = function(s,ws){
	wss.client.forEach(function each(client){
		ws.state = s;
		if (s == 1) {
			client.send(JSON.stringify(ws));
		}if (s == 0) {
			client.send(JSON.stringify(ws));
		}
	});
}
