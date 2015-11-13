angular.module('carFire').controller('loginCtrl', function($scope, userService, $state) {

	$scope.login = function() {
		userService.login($scope.user).then(function() {
			$state.go('cars');
		}).catch(function(err) {
			$scope.error = err;
		});
	};

});