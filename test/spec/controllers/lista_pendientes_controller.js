'use strict';

describe('Controller: ListaPendientesControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('listawebApp'));

  var ListaPendientesControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaPendientesControllerCtrl = $controller('ListaPendientesControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListaPendientesControllerCtrl.awesomeThings.length).toBe(3);
  });
});
