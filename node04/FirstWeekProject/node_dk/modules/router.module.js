//加载 express 模块（第三方模块）
var express = require('express');
//原生模块
var path = require('path');
//加载 body-parser 中间件（第三方模块）
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var message = require('../model/message.model.js');

// var app = express();

exports.router = function(app){
	app.get('/index', function(request, response){
		var _obj = new message(true);
		response.send(_obj);
	});

	app.post('/register', urlencodedParser, function(request, response){
		//打开数据库
		// request.body.password = md5()//BLL
		// db.open(function(err, db){
		// 	//操作数据库中的集合 cAccounts，
		// 	db.collection('cAccounts', function(err, collection){
		// 		console.log(err);
		// 		collection.insert(request.body);
		// 	});
		// 	db.close();
		// })
		response.send(new messageModel(true));
	});
	???????????
	// app.use(express.static(path.join(__dirname + '/client')));
};