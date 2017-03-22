var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection',function(){
	setTimeout(function(){
		console.log('ok1');
	},1000);
	
	eventEmitter.emit('data_received');
});

eventEmitter.on('data_received',function(){
	console.log('ok2');
});
eventEmitter.emit('connection');
console.log('完毕');
