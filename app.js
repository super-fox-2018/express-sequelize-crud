const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');
const path = require('path');
const routes = require('./routes');

// Set up express app
const app = express();

// Log requests to console
app.use(logger('dev'));

// Set views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming request data
app.use(bodyParser.urlencoded({ extended : false }));

// Setup method override
app.use(methodOverride('_method'));

app.use('/', routes);

const server = app.listen(3000, () => {
  console.log(`🙂  🙂  🙂  Express running on port → ${server.address().port}`);
});