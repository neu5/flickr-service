import app from '../app';

describe('Controller: HomeController', () => {
  let $controller;

  beforeEach(angular.mock.module(app));
  beforeEach(angular.mock.inject(_$controller_ => {
    $controller = _$controller_;
  }));

  it('should expose `toggleSelect` method', () => {
    let ctrl = $controller('HomeController');
    expect(ctrl.toggleSelect).toBeDefined();
  });

  it('should expose `setSelected` method', () => {
    let ctrl = $controller('HomeController');
    expect(ctrl.setSelected).toBeDefined();
  });

  it('should expose `removeSelected` method', () => {
    let ctrl = $controller('HomeController');
    expect(ctrl.removeSelected).toBeDefined();
  });
});
