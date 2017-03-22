var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(reqeust, response){
  var urlObj = url.parse(reqeust.url);
  var query = urlObj.query;
  var qsObj = querystring.parse(query);
  console.log(qsObj);
  response.end('Hello Node');
}).listen(8080);
