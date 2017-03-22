
//如果要使用cookie，需要显式包含这个模块
var cookieParser = require('cookie-parser');
//如果要使用session，需要单独包含这个模块
var session = require('express-session');

app.use(cookieParser());
app.use(session({
	secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
	name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
	cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
	resave: false,
	saveUninitialized: true,
}))


app.get('/index', function(req, res){
	req.session.name = 'dk';
	req.session.passowd = '123456';
	console.log(req.session.name, req.session.passowd);
	res.send('index');
})

app.get('/fetchAccounts', function(req, res){
	var jsonArray={};
	db.open(function(){
		//操作数据库中的集合 cAccounts，
		db.collection('cAccounts', function(err, collection){
			collection.find({lastname: 'Sam'}).toArray(function(err,ds){
				res.send(ds);
			});
			db.close();
		})
	})
	// res.send(JSON.stringify(jsonArray));
	// res.send('{"states": false}');	
	// res.send('fetchAccounts');
})


app.listen(888);

/*
用指定的参数创建一个session中间件，sesison数据不是保存在cookie中，仅仅sessionID保存到cookie中，session的数据仅仅保存在服务器端
app.use(express.session([options]));
options参数的具体取值:

key:字符串,用于指定用来保存session的cookie名称,默认为coomect.sid.

store:属性值为一个用来保存session数据的第三方存储对象.

fingerprint:属性值为一个自定义指纹生成函数.

cookie:属性值为一个用来指定保存session数据的cookie设置的对象,默认值为{path:”/”,httpOnly:true,maxAge:14400000}.

path是cookie保存路径.httpOnly是否只针对http保存cookie,

maxAge用于指定cookie的过期时间,单位为毫秒.

secret:字符串.用来对session数据进行加密的字符串.这个属性值为必须指定的属性.

resave:强制session保存到session store中。即使在请求中这个session没有被修改。但是这个并不一定是必须的，如果客户端有两个并行的请求到你的客户端，一个请求对session的修改可能被另外一个请求覆盖掉，即使第二个请求并没有修改sesion。默认是true,但是默认值已经过时，因此以后default可能会被修改。因此好好研究你的需求选择一个最适用的。大多数情况下你可能需要false 最好的知道你的store是否需要设置resave的方法是通过查看你的store是否实现了touch方法(删除那些空闲的session。同时这个方法也会通知session store指定的session是活动态的)，如果实现了那么你可以用resave:false,如果没有实现touch方法，同时你的store对保存的session设置了一个过期的时间，那么建议你用resave:true

saveUninitialized:强制没有“初始化”的session保存到storage中，没有初始化的session指的是：刚被创建没有被修改,如果是要实现登陆的session那么最好设置为false(reducing server storage usage, or complying with laws that require permission before setting a cookie) 而且设置为false还有一个好处，当客户端没有session的情况下并行发送多个请求时。默认是true,但是不建议使用默认值。

在使用了session中间件后,代表客户端请求的http.IncomingMessage对象就具有了一个session属性.该属性保存了所有session数据.
req.session.destroy(function (err) {
    if(err) console.log("session销毁失败.");
    else console.log("session被销毁.");
});

http://blog.csdn.net/liangklfang/article/details/50998959
 */