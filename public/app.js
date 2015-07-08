'use strict';

/**
 * @ngdoc overview
 * @name protractorApp
 * @description
 * # protractorApp
 *
 * Main module of the application.
 */
angular
  .module('protractorExample', [
    'ngRoute',
    'firebase'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'auth/login.html',
        controller: 'AuthCtrl',
      }).when('/register', {
        templateUrl: 'auth/register.html',
        controller: 'AuthCtrl'
      }).when('/awesomeness', {
        templateUrl: 'awesome/awesome.html',
        controller: 'AwesomeCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
