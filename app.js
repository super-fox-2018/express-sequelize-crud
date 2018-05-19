const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
let ejs = require('ejs')
app.set('view engine', 'ejs')
app.set('views', '/views')



//================= home route============
const homeRoutes = require('./routes/home');
app.use('/',homeRoutes)

//=============== show teacher ===============

const menuRoutes = require('./routes/index');
app.use('/students',menuRoutes)



app.listen(3000, () => console.log('Example app listening on port 3000!'))
