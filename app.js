'use strict'
const express = require('express')
let app = express()
const bodyParser = require('body-parser')
const routers = require('./routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use('/', routers )
app.set('view engine', 'ejs')
app.listen(3000, () => {
    console.log('App listening on port 3000')
})