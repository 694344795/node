var async = require('async');

//串行流程，one执行完再执行two，如果有three、four等方法，依次写下去，callback(arg1,arg2),两个参数，arg1是异常，arg2是方法的返回值，如果某个函数中arg1不为空，则程序到此终止，之后的不再执行
console.time('series');
async.series({
    one: function(callback) {
        console.log(111);
        callback(null, 'one');//callback('i am err','one');异常处理
    },
    two: function(callback) {
        console.log(222);
        callback(null, 'two');

    },
}, function(error, result) {
    //最后结果
    console.log('error: ' + error);
    console.log('result: ' + result);
    console.timeEnd('series');
});