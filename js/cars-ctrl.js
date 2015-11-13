angular.module('carFire').controller('carsCtrl', function($scope, carsRef, $firebaseArray, $firebaseObject, userService, $state) {

	if (!userService.getAuth()) {
		$state.go('login');
	}
	
	$scope.cars = $firebaseArray(carsRef);

	$scope.newCar = {};

	$scope.addCar = function() {
		$scope.cars.$add($scope.newCar);
	};

	$scope.logout = function() {
		userService.logout();
	}

});