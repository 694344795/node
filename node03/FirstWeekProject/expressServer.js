//加载 express 模块（第三方模块）
var express = require('express');
//原生模块
var path = require('path');
//加载 mongodb 模块（第三方模块）
var mongo = require('mongodb');
//实例化 mongodb 服务器
var mongoServer = new mongo.Server('127.0.0.1', 27017, {aut_reconnect: true});
//连接 mongodb 服务器中的一个 db，db 名叫 test
var db = mongo.Db('test', mongoServer);

//调用 express 模块
var app = express();
//加载http
var http = require('http');
//加载querystring
var querystring = require('querystring');

//加载 body-parser 中间件（第三方模块）
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})

//post 路由
app.post('/register', urlencodedParser, function(request, response) {
	console.log(request.body);
	//打开数据库
	db.open(function(err, db) {
		//操作数据库中的集合 cAccounts，
		db.collection('cAccounts', function(err, collection) {
			collection.insert(request.body, {safe: true});
		})
	})
	response.send('{"states": false}');
});
//http.createServer(function(req, res){
//      console.log(22222222222);
//	
//  // 定义了一个get变量，用于暂存请求体的信息
//  var get = '';     
//  // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
//  req.on('data', function(chunk){    
//      get += chunk;
//      console.log(11111111111);
//  });
//  // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
//  req.on('end', function(){    
//      get = querystring.parse(get);
//      request.query = get;
//      res.end(util.inspect(get));
//  });
//})
//post 路由
var isoff = false;
app.post('/login', urlencodedParser, function(request, response) {
	console.log(request.body.username);
	//打开数据库
	
	db.open(function(err, db) {
		//操作数据库中的集合 cAccounts，
		db.collection('cAccounts', function(err, collection) {
//			collection.insert(request.body, {safe: true});
			// 查询数据
			collection.find({username:request.body.username}).toArray(function(err, docs) {
				console.log(docs);
//				var doc = querystring.parse(docs);
				console.log(docs[0].password);
				if (docs[0].password == request.body.password) {
					console.log(true);
					isoff = true;
					app.use(express.static(path.join(__dirname + '/index')));
//					app.get('/index',function(req,res){res.sendfile('./client/index.html')})
					response.send(isoff);
				}
			});
		})
	})
	
});
//根目录加
app.use(express.static(path.join(__dirname + '/client')));

app.listen(888);