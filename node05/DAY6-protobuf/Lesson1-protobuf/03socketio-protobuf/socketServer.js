var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var ProtoBuf = require("protobufjs");

var builder = ProtoBuf.loadProtoFile(path.join(__dirname, "example.proto")),
    Message = builder.build("Message");

io.on('connection', function (socket) {
    socket.on('serverMessage', function (data) {
        var msg = Message.decode(data);
        console.log(msg);
        io.emit('clientMessage', msg.toBuffer());
    });
});

http.listen(88);
app.get('/', function(req, res){
	res.send('<h1>Welcome Realtime Server</h1>');
});

app.use(express.static(__dirname));