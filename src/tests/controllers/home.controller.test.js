import app from '../../app';

describe('Controller: HomeController', () => {
  let createController;

  beforeEach(angular.mock.module(app));
  beforeEach(angular.mock.inject($injector => {

    let $controller = $injector.get('$controller');

    createController = () => {
       return $controller('HomeController');
     };
  }));

  it('should expose `toggleSelect` method', () => {
    let ctrl = createController();
    expect(ctrl.toggleSelect).toBeDefined();
  });

  it('should expose `setSelected` method', () => {
    let ctrl = createController();
    expect(ctrl.setSelected).toBeDefined();
  });

  it('should expose `removeSelected` method', () => {
    let ctrl = createController();
    expect(ctrl.removeSelected).toBeDefined();
  });
});
