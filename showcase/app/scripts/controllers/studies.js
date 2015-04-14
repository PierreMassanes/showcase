'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:StudiesCtrl
 * @description
 * # StudiesCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('StudiesCtrl', function ($scope, $http) {
      $http.get('data/cvdata.json').
        success(function(data, status, headers, config){
          $scope.cvdata = data;
        });
  });
