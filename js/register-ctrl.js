angular.module('carFire').controller('registerCtrl', function($scope, userService, $state) {

	$scope.register = function() {
		userService.register($scope.newUser)
		.then(function() {
			return userService.login($scope.newUser);
		})
		.then(function() {
			$state.go('cars');
		})
		.catch(function(err) {
			$scope.error = "Registration error: please verify that you're using a valid email address and try again.";
		});
	};

});