var array = ['Sam', 'Tom', 'Lily'];
//异步控制模块，此模块是第三方模块
var async = require('async');

// array.forEach(function(e, i){
// 	setTimeout(function(){
// 		console.log(e);
// 	}, 1000);
// });

// $.each(array, function(item){})

async.eachSeries(array, function(item, callback){
	setTimeout(function(){
		console.log(item);
		//callback(错误信息, 要显示的内容)
		callback(null, item);
	}, 1000);	
}, function(error){
	console.log(error);
});
