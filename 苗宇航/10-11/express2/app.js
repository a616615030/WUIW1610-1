const express = require('express');
const fs = require('fs');
var app = express();

app.use(function (req,res,next) {
    var t = new Date().toLocaleTimeString();
   fs.appendFile('./log.txt',t+"\n",function (err) {
       if(err) throw err ;
   });
   next();
});
app.get('/',function (req,res) {
    res.send("首页")
});
app.get('/list',function (req,res) {
    res.send("列表")
});


var server = app.listen(8000,'localhost',function () {
    console.log("服务器正在运行中...，访问地址为:http://%s:%s",server.address().address,server.address().port);
});