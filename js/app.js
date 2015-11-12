var app = angular.module('carFire', ['firebase', 'ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {
	$stateProvider
		.state('cars', {
			url: '/cars',
			templateUrl: '/templates/cars.html',
			controller: 'carsCtrl',
			resolve: {
				carsRef: function(carsService) {
					return carsService.getCars();
				}
			}
		})
		.state('car', {
			url: '/cars/:carId',
			templateUrl: '/templates/car.html',
			controller: 'carCtrl',
			resolve: {
				carRef: function(carsService, $stateParams) {
					return carsService.getCar($stateParams.carId);
				},
				commentsRef: function(carsService, $stateParams) {
					return carsService.getComments($stateParams.carId);
				}
			}
		});

	$urlRouterProvider.otherwise('/cars');
});