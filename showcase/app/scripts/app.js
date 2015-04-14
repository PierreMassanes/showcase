'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/studies', {
        templateUrl: 'views/studies.html',
        controller: 'StudiesCtrl'
      })
      .when('/professional', {
        templateUrl: 'views/professional.html',
        controller: 'ProfessionalCtrl'
      })
      .when('/knowledge', {
        templateUrl: 'views/knowledge.html',
        controller: 'KnowledgeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
