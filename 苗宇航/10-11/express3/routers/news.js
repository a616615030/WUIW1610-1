var express = require('express');
var router = express.Router();

router.route('/')
    .get(function (req,res) {
        res.send("GET news")
    })
    .post(function (req,res) {
        res.send("POST news")
    });
router.route('/list')
    .get(function (req,res) {
        res.send("GET news-list")
    })
    .post(function (req,res) {
        res.send("POST news-list")
    });
  module.exports=router;