'use strict';

var mongoose = require('mongoose'),
  Thing = mongoose.model('Thing'),
  ToDo = mongoose.model('ToDo');

/**
 * Populate database with sample application data
 */
Thing.count({}, function(err, count) {
  if (err) {
    console.log('error counting Things!');
  } else if (count <= 0) {
    Thing.create({
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }, {
      name : 'MongoDB + Mongoose + Restify',
      info : 'An excellent document database. Combined with Mongoose and Restify to simplify adding validation and business logic.',
      awesomeness: 10
    }, function() {
        console.log('finished pre-populating database with dummydata');
      }
    );
  }
});

// Initialize some todo items
ToDo.count({}, function(err, count) {
  if (err) {
    console.log('error counting Things!');
  } else if (count <= 0) {
    ToDo.create({
      text : 'Finish this todo list',
      done : true
    }, {
      text : 'Learn more Angular.js',
      done : false
    }, {
      text : 'Figure out firebase integration',
      done : false
    }, {
      text : 'Roger that',
      done : false
    }, function() {
        console.log('finished pre-populating database with dummydata');
      }
    );
  }
});

