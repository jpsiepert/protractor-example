'use strict';

describe('Auth Controller', function () {
  var scope,
      authService,
      location,
      AuthCtrl;

  beforeEach(function () {

    module('protractorApp');

    inject(function($rootScope, _authService_, $location, $controller){
      scope = $rootScope;
      authService = _authService_;
      location = $location;
      AuthCtrl = $controller('AuthCtrl', {$scope: scope, authService: authService, $location: location});
    });

    spyOn(authService, 'login');
    spyOn(authService, 'register');
    spyOn(authService, 'logout');
    scope.user = {
      email: 'test@test.com',
      password: 'lovejavascript'
    };
  });

  it('should login from service', function () {
    scope.login();

    expect(authService.login).toHaveBeenCalled();
  });

  it('should register a user from service', function () {

    scope.register();

    expect(authService.register).toHaveBeenCalled();

  });

  it('should logout user from service', function () {

    scope.logout();

    expect(authService.logout).toHaveBeenCalled();
  });

  it('should route user to login after logout', function () {
    scope.logout();

    expect(location.path()).toEqual('/login');
  });




});
