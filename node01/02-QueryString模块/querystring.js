var querystring = require('querystring');


//http://xxx.com?name=&passwod
//
var obj={name:"1000phone",url:"http://1000phone.com", name: 'tom', passowrd: 123456};

var param= querystring.stringify(obj);
//没有指定分隔符和分配符,并且自动编码汉字
console.log(param);

// var newobj=querystring.parse(param);
// console.log(newobj);``