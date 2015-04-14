'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:KnowledgeCtrl
 * @description
 * # KnowledgeCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('KnowledgeCtrl', function ($scope, $http) {
    $http.get('data/cvdata.json').
      success(function(data, status, headers, config){
        $scope.cvdata = data;
      });

    $scope.showSousCat = function(souscat) {
      return souscat.hasOwnProperty("sousCategorie");
    }

  });
