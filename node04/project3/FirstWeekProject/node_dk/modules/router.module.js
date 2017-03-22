//加载 express 模块（第三方模块）
var express = require('express');
//原生模块
var path = require('path');
//加载 body-parser 中间件（第三方模块）
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var message = require('../model/message.model.js');

var db = require('./dbhelper.module.js');

exports.router = function(app){
	app.use(express.static(path.join(path.resolve(__dirname, '../../') + '/client')));

	app.get('/index', function(request, response){
		db.get(function(_data){
			var _obj = new message(true, null ,_data);
			response.send(_obj);
		});
	});

	app.get('/index2', function(request, response){
		//判断当前用户是否登录
		//如果没有登录，则跳到登录页
		//如果已经登录，则显示要显示的文档
		//显示方式，在页面上用 angularjs 用列表的方式显示出来
		db.get({"firstname":"lan"}, function(_data){
			var _obj = new message(true, null ,_data);
			response.send(_obj);
		});
	});	
	
	app.post('/register', urlencodedParser, function(request, response){
		db.insert(request.body);
		response.send(new message(true));
	});

	app.post('/login', urlencodedParser, function(request, response){
		db.get({"username": request.body.username, "password": request.body.password}, function(_data){
			if(_data != null && _data.length > 0){
				//登录成功 => 记录登录状态 => session
				//
				console.log(_data);
				response.send(new message(true));
			} else {
				console.log('dk');
				response.send(new message(false));
			}
		});
	});	
};