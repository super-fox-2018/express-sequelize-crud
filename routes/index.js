let express = require('express');
let routes = express.Router();

// Homepage
routes.get('/', function(req, res) {
  res.render('home');
});

module.exports = routes;