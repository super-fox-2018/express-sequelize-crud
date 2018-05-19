const fs = require('fs');
var express = require('express')
var router = express()
// const Model = require('./../models');


router.get('/',function(req,res){
  res.render('home',{
    homeData :'Welcome to Website'
  })
})
module.exports = router
