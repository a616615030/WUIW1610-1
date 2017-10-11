var express = require("express");
var app = express();

// app.get("ab?c",function(req,res){
//     res.send("访问成功");
// })
//
// app.get("/hc+d",function(req,res){
//
// })

//路由句柄
app.get("/",function(req,res,next){
    console.log("第一个函数")
    next();
},function(req,res){
    console.log("第二个函数");
    res.send("hello")
})

var server = app.listen(8000,'localhost',function(){
    console.log('服务器正在运行中...，访问地址为：http://'+server.address().address+':'+server.address().port);
});
