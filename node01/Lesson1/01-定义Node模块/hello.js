function hello(){
	console.log('Hello World');
}

function hello1(){
	console.log('Hollo World 1');
}

//导出模块，把模块接口公开出去，或者说是把模块接口暴露出去
exports.say = hello;

exports.say1 = hello1;