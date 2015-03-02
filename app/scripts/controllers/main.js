'use strict';

/**
 * @ngdoc function
 * @name protractorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the protractorApp
 */
angular.module('protractorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
