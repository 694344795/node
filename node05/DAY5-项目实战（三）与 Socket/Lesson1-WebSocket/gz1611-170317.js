// 加载 websocket 模块
var ws = require('ws');
//实例化一个 websocket
var wss = new ws.Server({server: '10.3.135.73/', port: 88});

//监听连接
wss.on('connection', function(ws){
	console.log('connection');

	//监听到客户端发过来的消息
	ws.on('message', function(mess){
		// console.log(arguments);

		ws.send(mess);
	});	

	ws.on('close', function(){
		ws.send('xxoo 离开人世');
	});	
});


