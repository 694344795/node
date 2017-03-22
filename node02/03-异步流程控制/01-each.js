var async = require('async');

var array = ['Sam', 'Tom', 'Lily'];

// array.forEach(function(item, index){
// 	setTimeout(function(){
// 		console.log(item, index);
// 	}, 1000);
// });

async.each(array, function(item, callback){
	setTimeout(function(){
		console.log(item);
		callback(null, item);
	}, 1000);	
}, function(error){
	console.log(error);
});

// async.eachSeries(array, function(item, callback){
// 	setTimeout(function(){
// 		console.log(item);
// 		//callback(错误信息, 要显示的内容)
// 		callback(null, item);
// 	}, 1000);	
// }, function(error){
// 	console.log(error);
// });