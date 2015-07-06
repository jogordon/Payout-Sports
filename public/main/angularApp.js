var app = angular.module('main', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          "home": {
            templateUrl: '/home.html',
            controller: 'homeCtrl',
            resolve: {
            }
          }
        } 
      });
    $urlRouterProvider.otherwise('home');
  }
]);