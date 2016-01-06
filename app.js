var app = angular.module('carApp', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('cars', {
      url: '/cars',
      templateUrl: 'carsTmpl.html',
      controller: 'carsCtrl'
    })
    .state('car', {
      url: '/cars/:carId',
      templateUrl: 'carTmpl.html',
      controller: 'carCtrl'
    });
  $urlRouterProvider.otherwise('/cars');
});
