'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:ProfessionalCtrl
 * @description
 * # ProfessionalCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ProfessionalCtrl', function ($scope, $http) {
      $http.get('data/cvdata.json').
        success(function(data, status, headers, config){
          $scope.cvdata = data;
        });
  });
