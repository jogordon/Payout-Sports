var home = angular.module('home', []);
var angularApp = angular.module('angularApp', ['ui.router', 'home']);

angularApp.config([
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