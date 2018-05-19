var express = require("express")
var app = express()
var bodyParser = require('body-parser')
var student = require('./routes/student.js')
var teacher = require('./routes/teacher.js')
var subject = require('./routes/subject.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.use('/student',student)
app.use('/teacher',teacher)
app.use('/subject',subject)

app.listen(3001,function() {
	console.log("listen")
})

