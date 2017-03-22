/*
智能控制
需求如下：

1.某处取得数据
2.在硬盘上建立一个新的目录
3.将数据写入到目录下某文件
4.发送邮件，将文件以附件形式发送给其它人。
可以知道1与2可以并行执行，3需要等1和2完成，4要等3完成。 
使用auto来解决
 */

var async = require('async');
console.time('auto');
async.auto({
    getData: function(callback) {
        setTimeout(function() {
            console.log('1.1: got data');
            callback(null, 'mydata');
        }, 300);
    },
    makeFolder: function(callback) {
        setTimeout(function() {
            console.log('1.1: made folder');
            callback(null, 'myfolder');
        }, 200);
    },
    writeFile: ['getData', 'makeFolder', function(results, callback) {
        setTimeout(function() {
            console.log('1.1: wrote file');
            callback(null, 'myfile');
        }, 300);
    }],
    emailFiles: ['writeFile', function(results, callback) {
        console.log('emailed file: ', results.writeFile);
        callback(null, results.writeFile);
    }]
}, function(err, results) {
    console.log('err: ', err);
    console.log('results: ', results);
    console.timeEnd('auto');
});