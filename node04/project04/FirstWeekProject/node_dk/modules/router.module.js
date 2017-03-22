//加载 express 模块（第三方模块）
var express = require('express');
//原生模块
var path = require('path');
//加载 body-parser 中间件（第三方模块）
var bodyParser = require('body-parser');
//如果要使用cookie，需要显式包含这个模块
var cookieParser = require('cookie-parser');
//如果要使用session，需要单独包含这个模块
var session = require('express-session');

var urlencodedParser = bodyParser.urlencoded({
	extended: false
})

var message = require('../model/message.model.js');

var db = require('./dbhelper.module.js');

var sussdata = [];
exports.router = function(app) {
	app.use(express.static(path.join(path.resolve(__dirname, '../../') + '/client')));

	app.use(cookieParser());
	app.use(session({
		secret: '12345', //用来对session数据进行加密的字符串.这个属性值为必须指定的属性
		name: 'testapp', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
		cookie: {
			maxAge: 8000
		}, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
		resave: false,
		saveUninitialized: true,
	}))

	app.get('/index', function(req, res) {
		db.get(function(_data) {
			var _obj = new message('true', null ,_data);
			req.session.name = sussdata[0];
			req.session.password = sussdata[1];
			console.log(req.session.name, req.session.password);
			if(req.session.name) {
				res.send('<div ng-bind="name">你好:'+req.session.name+'</div><br/>');
			} else {
				res.send('你还没有登录，先登录下再试试！');
			}
//			res.send(sussdata);
		});
	});

	app.get('/index2', function(request, response) {
		//判断当前用户是否登录
		//如果没有登录，则跳到登录页
		//如果已经登录，则显示要显示的文档
		//显示方式，在页面上用 angularjs 用列表的方式显示出来
		db.get({
			"firstname": "lan"
		}, function(_data) {
			var _obj = new message('true', null, _data);
			response.send(_obj);
		});
	});

	app.post('/register', urlencodedParser, function(request, response) {
		db.insert(request.body);
		response.send(new message('true'));
	});

	app.post('/login', urlencodedParser, function(request, response) {
		db.get({
			"username": request.body.username,
			"password": request.body.password
		}, function(_data) {
			console.log(1111);
			if(_data != null && _data.length > 0) {
				//登录成功 => 记录登录状态 => session
				//
				console.log(_data);
				sussdata.push(_data[0].username);
				sussdata.push(_data[0].password);
				response.send(new message('true', _data[0].username, _data[0].password));
			} else {
				console.log('dk');
				response.send(new message('false'));
			}
		});
	});
};