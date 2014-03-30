'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    restify = require('express-restify-mongoose');

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application Config
var config = require('./lib/config/config');

// Connect to database
var db = mongoose.connect(config.mongo.uri, config.mongo.options);

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  if (/(.*)\.(js$|coffee$)/.test(file)) {
    require(modelsPath + '/' + file);
  }
});

// Populate empty DB with sample data
require('./lib/config/dummydata');

var app = express();

// Express settings
require('./lib/config/express')(app);

app.configure(function () {
  console.log('restify app configure');

  // iterate through all the models in mongoose and add to restify endpoint
  for (var model in db.models) {
    restify.serve(app, db.models[model], {
      //exclude: 'text,done'
    });
  }
});

// Routing
require('./lib/routes')(app);

// Start server
app.listen(config.port, function () {
  console.log('Ray\'s Express server listening on port %d in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;