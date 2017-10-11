const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
var data =[
    '星期一',
    '星期二',
    '星期二',
    '星期三',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
    '星期三',
    '星期天'
]
var server = http.createServer(function (req,res) {
      var uObj = url.parse(req.url);
      if(uObj.pathname=="/favicon.ico"){
          res.end();
          return;
      }
    if(uObj.pathname=="/" || uObj.pathname=="/index.html"){
        fs.readFile("./index.html",function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(uObj.pathname=="/search"){
        var qObj = qs.parse(uObj.query);
        res.setHeader('Content-type','text/plain;charset=utf-8');
        var d=data.filter((v)=>{
            if(v==qObj.s){
                return true;
            }
            return false;
        })
        res.write(JSON.stringify(d));
        res.end();
    }
})
server.listen(8000,'localhost',function(){
    console.log('服务器正在运行中...，访问地址为：http://'+server.address().address+':'+server.address().port);
});
