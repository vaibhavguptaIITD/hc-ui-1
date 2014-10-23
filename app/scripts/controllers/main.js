'use strict';

/**
 * @ngdoc function
 * @name hcUi1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hcUi1App
 */
angular.module('hcUi1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.fruitsList = 
	    {"Apple":"Apple",
	    "Banana": "Banana",
	    "Orange": "Orange",
	    "Peach": "Peach",
	    "Pear": "Pear"}
  });
