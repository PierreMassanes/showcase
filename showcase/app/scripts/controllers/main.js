'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('data/cvdata.json').
      success(function(data, status, headers, config){
        $scope.cvdata = data;
      });
  });
