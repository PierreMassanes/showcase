'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainMenuCtrl
 * @description
 * # MainMenuCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainMenuCtrl', function ($scope) {
      $scope.menuItems = [["Accueil","#"], ["Formation","#/studies"], ["Professionnel","#/professional"], ["Compétences","#/knowledge"]];

      $scope.selectedIndex = 0;

      $scope.itemClicked = function($index){
        $scope.selectedIndex = $index;
      }
  });
