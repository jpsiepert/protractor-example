'use strict';

angular.module('protractorApp')
/**
 * @ngdoc overview
 * @name protractorApp
 * @description
 * # AuthCtrl
 * controller for logging in and registering
 */
.controller('AuthCtrl', function (
  $scope,
  $location,
  authService) {


  /**
  * @ngdoc method
  * @methodOf protractorApp.controller:AuthCtrl
  * @name protractorApp.controller:AuthCtrl#login
  * @description
  * Calls authService and logs user in.
  */
  $scope.login = function login() {
    authService.login($scope.user, function(user) {
      console.log('user', user);
      $location.path('/awesomeness');
    });
  };

  /**
  * @ngdoc method
  * @methodOf protractorApp.controller:AuthCtrl
  * @name protractorApp.controller:AuthCtrl#register
  * @description
  * Creates a new user in the database, logs them in
  * routes to new page.
  */
  $scope.register = function register() {
    authService.register($scope.user, function(user) {
      $location.path('/awesomeness');
    });
  };


  $scope.logout = function logout() {
    console.log('logging out');
    authService.logout();
    $location.path('/login');
  };

});