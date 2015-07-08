'use strict';

angular.module('protractorExample')

.controller('AwesomeCtrl', function($scope, authService) {

  $scope.searchedText = false;


  $scope.search = function search () {
    $scope.text = $scope.searchText.toUpperCase() + ' is AWESOME!';
    $scope.searchText = '';
    $scope.searchedText = true;
  };
});