const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routers = require('./routers')

app.use(bodyParser.urlencoded({extended: false}))
app.use('/',routers);
app.set('view engine','ejs')

app.listen(3000,()=>{
  console.log("coba")
})
