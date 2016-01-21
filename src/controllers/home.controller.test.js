import app from '../app';

describe('Controller: HomeController', function() {
  let $controller;

  beforeEach(angular.mock.module(app));
  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('should expose `toggleSelect` method', function() {
    let ctrl = $controller('HomeController');
    expect(ctrl.toggleSelect).toBeDefined();
  });

  it('should expose `setSelected` method', function() {
    let ctrl = $controller('HomeController');
    expect(ctrl.setSelected).toBeDefined();
  });

  it('should expose `removeSelected` method', function() {
    let ctrl = $controller('HomeController');
    expect(ctrl.removeSelected).toBeDefined();
  });
});
