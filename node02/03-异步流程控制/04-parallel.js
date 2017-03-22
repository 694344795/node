/*
并行无关联

多个函数执行，之间没有任何的关系，也就是说谁执行都行，为了节约时间就可以使用并行流程来解决

并行无关联和串行无关联唯一的差异就是名称不同，但也都是见名知意，主要看执行的时间！！！
 */
var async = require('async');
console.time('parallel');
async.parallel({
    one: function(callback) {
        //处理逻辑
        callback(null, 'one');
    },
    two: function(callback) {
        //处理逻辑
        callback(null, 'tow');
    },
    three: function(callback) {
        //处理逻辑
        callback(null, 'three');
    },
    four: function(callback) {
        //处理逻辑
        callback(null, 'four');
    }
}, function(error, result) {
    console.log('one:', result.one);
    console.log('two:', result.two);
    console.log('three:', result.three);
    console.log('four:', result.four);
    console.log('error: ' + error);
    console.log('result: ' + JSON.stringify(result));
    console.timeEnd('parallel');
});