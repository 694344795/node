/*
注意:waterfall不能使用对象表示法来传递(json格式)

串行有关联

多个函数或方法执行，每一步执行时都需要上一步执行的结果当参数，所以就会有串行等待。async里有waterfall可以实现此场景：

这个比较series换了个方法名之外，每个函数多了个参数第二个函数中onearg则是第一个函数的值，以此类推，callback中没变，如果有异常，立即终止
 */
var async = require('async');
console.time('waterfall');
async.waterfall([
    function(callback) {
        console.log(1);
        callback(null, 'one');
    },
    function(onearg, callback) {
        console.log(2);
        callback(null, onearg + '>>>two');
    },
    function(twoarg, callback) {
        console.log(3);
        callback(null, twoarg + '>>>three');
    },
    function(threearg, callback) {
        console.log(4);
        callback(null, threearg + '>>>four');
    }
], function(error, result) {
    console.log('error: ' + error);
    console.log('result: ' + result);
    console.timeEnd('waterfall');
});