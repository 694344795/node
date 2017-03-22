var app = require('express')();
var url = require('url');

//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
//第三方的模块
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.get('/process_get', function (req, res) {

//    // 输出 JSON 格式
//    var response = {
//        first_name: url.parse(req.url, true).query.first_name,
//        last_name: url.parse(req.url, true).query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// });



app.post('/process_post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

app.listen(888);