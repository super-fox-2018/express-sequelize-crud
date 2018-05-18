'use strict'

const express = require('express')
let app = express()
var router = require("./routes/index.js")
var studentRoute = require("./routes/studentRoute.js")
var teacherRoute = require("./routes/teacherRoute.js")
var bodyParser = require('body-parser')
app.set('view engine', 'ejs')



app.use(bodyParser.urlencoded({ extended: false }))




app.use('/',router);
app.use('/',studentRoute);
app.use('/',teacherRoute);


app.listen(3002,function() {
	console.log("listenn")
})