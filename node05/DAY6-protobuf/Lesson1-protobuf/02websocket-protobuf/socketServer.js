var http = require('http');
var fs = require('fs');
var path = require("path");
var ProtoBuf = require("protobufjs");
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
var builder = ProtoBuf.loadProtoFile(path.join(__dirname, "example.proto")),
    Message = builder.build("Message");
wss.on('connection', function (ws) {
    ws.on('message', function (data,flags) {
        if (flags.binary) {
            try {
                var msg = Message.decode(data);
                console.log(msg);
                wss.clients.forEach(function each(client) { 
                    client.send(msg.toBuffer()); 
                });
            } catch (err) {
                console.log("Processing failed:", err);
            }
        } else {
            console.log("Not binary data");
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