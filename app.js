const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set('view engine','ejs')	
const index = require('./routes/index')
const studentRoutes = require('./routes/studentRoutes')
const teacherRoutes = require('./routes/teacherRoutes')

app.use(bodyParser.urlencoded({extended: false}))




app.use('/',index)
app.use('/teachers',teacherRoutes)
app.use('/students',studentRoutes)

app.listen(3000,function(){
	console.log('connection on port 3000')
})