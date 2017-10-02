'use strict';

describe('Service: listaPendientesService', function () {

  // load the service's module
  beforeEach(module('listawebApp'));

  // instantiate service
  var listaPendientesService;
  beforeEach(inject(function (_listaPendientesService_) {
    listaPendientesService = _listaPendientesService_;
  }));

  it('should do something', function () {
    expect(!!listaPendientesService).toBe(true);
  });

});
