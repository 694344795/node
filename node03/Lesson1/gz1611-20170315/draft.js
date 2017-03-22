//路由
//express 封装当中包括但不限于 http 模块
var express = require('express');

var app = express();

app.get('/', function(request, response){
	var str = '{name: "Sam", age: 18}';
	response.send(str);
});

//request 和 response 对象都是继承了原生模块中的 request 和 response 对象
app.get('/aa', function(request, response){
	// response.send('aa page');
	response.write('aa page');
	response.end();
});

app.get('/1.jpg', function(request, response){
	//__dirname => 系统变量，指当前文件所在的绝对目录
	console.log(__dirname);
	response.sendFile(__dirname + '/1.jpg');
});

app.get('/index.html', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

app.get('/bb', function(request, response){
	console.log(request.url);
	//send 相当于 response.write();response.end();
	response.send('bb page');
})

app.listen(888);