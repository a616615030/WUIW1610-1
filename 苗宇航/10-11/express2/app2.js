const express = require('express');
const fs = require('fs');
var app = express();

//只有路径/list 才能访问到
app.use('/list',function (req,res,next) {
    var t = new Date().toLocaleTimeString();
    fs.appendFile('./log2.txt',t+"\n",function (err) {
        if(err) throw err ;
    });
    next();
})
app.get('/',function (req,res) {
    res.send("首页")
})
app.get('/list',function (req,res) {
    res.send("列表")
})


var server = app.listen(8000,'localhost',function () {
    console.log("服务器正在运行中...，访问地址为:http://%s:%s",server.address().address,server.address().port);
})