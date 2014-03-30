'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Todo Schema
 * @type {mongoose}
 */
var ToDoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, default: false }
});

/**
 * Todo model
 */
var ToDoModel = mongoose.model('ToDo', ToDoSchema);