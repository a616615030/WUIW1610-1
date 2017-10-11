const express = require('express');
const fs = require('fs');
var app = express();

app.use(function (req,res,next) {
    //10000
    req.money=10000;
    next();
})
app.use(function (req,res,next) {
    //6000
    req.money=req.money-4000;
    next();
})
app.use(function (req,res,next) {
    //4000
    req.money=req.money-2000;
    next();
})
app.use(function (req,res,next) {
    //2000
    req.money=req.money-2000;
    next();
})
app.use(function (req,res,next) {
    //1000
    req.money=req.money-1000;
    next();
})
app.use(function (req,res,next) {
    //1000
    req.money=req.money-500;
    next();
})

app.get('/',function (req,res) {
    res.send(req.money+'');
})

var server = app.listen(2000,'localhost',function () {
    console.log("当前项目地址是:http://%s:%s",server.address().address,server.address().port);
})