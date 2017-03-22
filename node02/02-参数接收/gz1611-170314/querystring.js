//获取 url 参数具备哪些条件：
//需要有服务器
//request.url
//url.parse


var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(request, response){
	var urlStr = request.url;
	var urlObj = url.parse(urlStr, true); //urlObj.query => 对象
	// var qsObj = querystring.parse(urlObj.query);
	console.log(request.method);
	//把提交的信息保存以数据库
	

	var postData = '';
	request.addListener('data', function(_data){
		console.log(_data);
		postData += _data;
	});

	request.addListener('end', function(){
		console.log(postData);
		var qsObj = querystring.parse(postData);
		console.log(qsObj);
	})

	response.end();
}).listen(888);

// document.addEventListen('click', function(event){})

// document.get('aa').onclick = function(event){
// 	console.log()
// }