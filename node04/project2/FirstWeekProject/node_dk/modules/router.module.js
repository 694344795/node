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
		db.get(null, function(_data){
			var _obj = new message(true, null , _data);
			response.send(_obj);
		});
	});
	
	app.post('/register', urlencodedParser, function(request, response){
		db.insert(request.body);
		response.send(new message(true));
	});
};