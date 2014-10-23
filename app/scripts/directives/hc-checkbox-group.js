'use strict';

/**
 * @ngdoc directive
 * @name hcUi1App.directive:hcCheckboxGroup
 * @description
 * # hcCheckboxGroup
 */
angular.module('hcUi1App')
  .directive('hcCheckboxGroup', function () {
    return {
      templateUrl: 'views/hc-checkbox-group.html',
      require : 'ngModel',
      restrict: 'E',
      scope : {
      	items : "=",
      	cbArr : "=ngModel"
      },
      controller : ["$scope", function($scope){
	    $scope.cbArr = $scope.cbArr || [];
	    var keys = Object.keys($scope.items);
	    $scope.handleAllCB = function(){
	    	var all = $scope.all;
	    	if(! angular.isUndefined(all)){
	    		$scope.cbArr.length = 0;
	    		if(all === true){
	    			Array.prototype.push.apply($scope.cbArr, keys);
	    		}
	    	}
	    }
	    $scope.$watchCollection("cbArr", function(newValue){
	    	if(! angular.isUndefined(newValue)){
	    		if(newValue.length === keys.length){
		    		$scope.all = true;
		    	}
		    	else{
		    		$scope.all = false;
		    	}
	    	}
	    	
	    })
      }]
    };
  });
