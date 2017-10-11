const express = require('express');
var app = express();

// 路由模块
var home = require('./routers/home');
var news = require('./routers/news');
var product = require('./routers/product');

app.use('/',home);
app.use('/news',news);
app.use('/product',product);

var server = app.listen(2000,'localhost',function () {
    console.log("当前项目地址是:http://%s:%s",server.address().address,server.address().port);
})