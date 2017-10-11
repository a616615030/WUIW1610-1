var express = require('express');
var router = express.Router();

router.route('/')
    .get(function (req,res) {
        res.send("GET product")
    })
    .post(function (req,res) {
        res.send("POST product")
    })
router.route('/show')
    .get(function (req,res) {
        res.send("GET show-product")
    })
    .post(function (req,res) {
        res.send("POST show-product")
    })
module.exports=router;