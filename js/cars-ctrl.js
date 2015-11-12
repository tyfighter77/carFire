angular.module('carFire').controller('carsCtrl', function($scope, carsRef, $firebaseArray, $firebaseObject) {
	
	$scope.cars = $firebaseArray(carsRef);

	$scope.newCar = {};

	$scope.addCar = function() {
		$scope.cars.$add($scope.newCar);
	};

});