'use strict';

describe('Directive: hcCheckboxGroup', function () {

  beforeEach(module("my.templates"));
  // load the directive's module

  beforeEach(module('hcUi1App'));

  var element,scope,$element,
    fruitsList = 
      {"Apple":"Apple",
      "Banana": "Banana",
      "Orange": "Orange",
      "Peach": "Peach",
      "Pear": "Pear"};

  
  beforeEach(inject(function($rootScope, $compile) {
    // we might move this tpl into an html file as well...
    element = angular.element('<hc-checkbox-group items="fruitsList" ng-model="fruits"></hc-checkbox-group>');
    scope = $rootScope;
    scope.fruitsList = fruitsList;
    $compile(element)(scope);
    scope.$digest();
    $element = $(element);
  }));


  it('should generate list of checkboxes', inject(function ($compile) {
    //Check if it created "All" checkbox
    expect($element.find("input[type='checkbox'][value='All']").length).toEqual(1);
    //Check if it created checkboxes for fruits
    for(var key in fruitsList){
      expect($element.find("input[type='checkbox'][value='"+fruitsList[key]+"']").length).toEqual(1);
    }
  }));

  it('should update model on selecting checkboxes', inject(function($compile){
    var e = $.Event("click");
    $element.find("input[type='checkbox'][value='Apple']").trigger(e);
    $element.find("input[type='checkbox'][value='Banana']").trigger(e);

    expect(scope.fruits).toContain("Apple");
    expect(scope.fruits).toContain("Banana");
  }));

  it('should select all checkboxes when All is pressed', inject(function($compile){
  
    var e = $.Event("click");

    //Click on All
    $element.find("input[type='checkbox'][value='All']").trigger(e);
    
    for(var key in fruitsList){
      //Check if model was updated
      expect(scope.fruits).toContain(key);
      //Check if checkbox was checked
      expect($element.find("input[type='checkbox'][value='"+key+"']").is(":checked")).toBeTruthy();
    }
  }));

  it('should deselect all checkboxes when All is unselected', inject(function($compile){
    var e = $.Event("click");

    $element.find("input[type='checkbox'][value='All']").trigger(e).trigger(e);
    
    expect(scope.fruits.length).toEqual(0);
    for(var key in fruitsList){
      expect($element.find("input[type='checkbox'][value='"+key+"']").is(":checked")).toBeFalsy();
    }
  }));




});
