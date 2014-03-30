'use strict';

/**
 * todos.js
 * based on the angularjs todo sample
 **/
angular.module('angularApp')
  .factory('Todo', function($resource) {
    return $resource('/api/v1/todos/:id', { id: '@_id' });
  })
  .controller('TodoCtrl', function($scope, Todo) {
    $scope.todos = Todo.query();

    $scope.addTodo = function() {
      var todo = new Todo();
      todo.text = $scope.todoText;
      todo.$save(function() {
        $scope.todos.push(todo);
      });

      $scope.todoText = '';
    };
    $scope.finished = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 1 : 0;
      });
      return count;
    };
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
    $scope.save = function(item) {
      item.$save();
    };
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) {
          $scope.todos.push(todo);
        }
      });

      Todo.delete({ done: true });
    };
  });