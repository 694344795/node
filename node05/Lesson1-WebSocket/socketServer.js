var http = require('http');
var fs = require('fs');
var path = require("path");
// HTTP server
var server = http.createServer(function(req, res) {
        var file = null,
            type = "text/html";
        if (req.url == "/") {
            file = "index.html";
        } else if (/^\/(\w+(?:\.min)?\.(?:js|html|proto))$/.test(req.url)) {
            file = req.url.substring(1);
            if (/\.js$/.test(file)) {
                type = "text/javascript";
            }
        }
        if (file) {
            fs.readFile(path.join(__dirname, file), function(err, data) {
                if (err) {
                    res.writeHead(500, {"Content-Type": type});
                    res.end("Internal Server Error: "+err);
                } else {
                    res.writeHead(200, {"Content-Type": type});
                    res.write(data);
                    res.end();
                    console.log("Served www/"+file);
                }
            });
        } else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("Not Found");
        }
    });
server.listen(88);
server.on("listening", function() {
    console.log("Server started");
    // open("http://localhost:8080/");
});



var socketServer = require('ws').Server;
// var wss = new socketServer({
// 	port: 88
// });
var wss = new socketServer({server: server});

wss.on('connection', function (ws) {
	// ws.send('你是第' + wss.clients.length + '位'); 
    ws.on('message', function (jsonStr,flags) {
    	var obj = eval('(' + jsonStr + ')');  
    	this.user = obj;  
        if (typeof this.user.message != "undefined") {  
            wss.broadcast(1,obj);  
            // client.send(JSON.stringify(ws)); 
        } 
    });

    // 退出聊天  
    ws.on('close', function(close) {  
        try{  
            wss.broadcast(0,this.user);  
        }catch(e){  
            console.log('刷新页面了');  
        }  
    });  
});

//广播  
wss.broadcast = function broadcast(s,ws) {  
    wss.clients.forEach(function each(client) { 
    	ws.state = s; 
        if(s == 1){  
            client.send(JSON.stringify(ws));  
        }  
        if(s == 0){  
            client.send(JSON.stringify(ws));    
        }  
    });  
}; 