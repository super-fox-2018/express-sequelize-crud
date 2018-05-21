const express = require('express');
const app = express();
const routes = require('./routes');
const students = require('./routes/student-route');
const teachers = require('./routes/teacher-route');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);
app.use('/', students);
app.use('/', teachers);

app.listen(3000, () => console.log(`express-sequelize-crud on port 3000`))