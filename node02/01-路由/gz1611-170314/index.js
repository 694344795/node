//路由得具备：
//有一个url
//路由映射表
//对应的响应体

var http = require('http');
var url = require('url');

//路由映射表
var router = {
	'/':  function(){
		console.log('router-index');
	},
	'aa': function(){
		console.log('router-aa');
	}
}

//
http.createServer(function(request, response){
	var urlStr = request.url;
	var urlObj = url.parse(urlStr)
	// console.log(urlObj.pathname.replace('/', ''));

	//对应路由映射表的响应体
	//aa
	//favicon.ico
	var pathname = urlObj.pathname == '/' ? urlObj.pathname : urlObj.pathname.replace('/', ''); //aa || favicon.ico || / || bb || cc...
	// for(key in router){
	// 	if(key == pathname){
	// 		router[key]();
	// 	}
	// }
	console.log(pathname);
	if(router[pathname]){//favicon.ico
		router[pathname]();
		response.write(pathname);
	} else {
		response.write('404');
	}

	// router[urlObj.pathname.replace('/', '')]();
	
	// router.aa();
	// router.favicon.ico();

	
	response.end();
}).listen(8080);