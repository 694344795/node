//加载 express 模块（第三方模块）
var express = require('express');

var router = require('./node_dk/modules/router.module.js');

//调用 express 模块
var app = express();

router.router(app);

app.listen(888);