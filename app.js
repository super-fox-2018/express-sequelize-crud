const express = require('express');
let app = express();
let index = require('./routes_subject');

app.use('/', index);

app.listen(3000);