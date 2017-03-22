var express = require('express');
var path = require('path'); //原生模块
var app = express();

//express.static 指当前文档的静态目录
app.use(express.static(path.join(__dirname, '/')));

var server = app.listen(888, function(){
	console.log(server.address());
})