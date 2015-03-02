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
  .module('protractorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
      }).when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      }).when('/awesomeness', {
        templateUrl: 'views/awesome.html',
        controller: 'AwesomeCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
