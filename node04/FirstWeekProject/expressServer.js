//加载 express 模块（第三方模块）
var aa = require('express');

var router = require('./node_dk/modules/router.module.js');

//调用 express 模块
var app = express();

router.router(app);

app.listen(888);

	// app.get('/index', function(request, response){
	// 	// var _obj = new messageModel(true);
	// 	response.send('index page');
	// });


//加载 mongodb 模块（第三方模块）
// var mongo = require('mongodb');
// //实例化 mongodb 服务器
// var mongoServer = new mongo.Server('127.0.0.1', 27017, {aut_reconnect: true});
// //连接 mongodb 服务器中的一个 db，db 名叫 test
// var db = mongo.Db('test', mongoServer);






//post 路由
// app.post('/register', urlencodedParser, function(request, response){
// 	//打开数据库
// 	request.body.password = md5()//BLL
// 	db.open(function(err, db){
// 		//操作数据库中的集合 cAccounts，
// 		db.collection('cAccounts', function(err, collection){
// 			console.log(err);
// 			collection.insert(request.body);
// 		});
// 		db.close();
// 	})
// 	response.send('{"states": false}');
// });

// app.use(express.static(path.join(__dirname + '/client')));