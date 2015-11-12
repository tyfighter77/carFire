angular.module('carFire').controller('carCtrl', function($scope, carRef, commentsRef, $firebaseArray, $firebaseObject) {

	$scope.car = $firebaseObject(carRef);
	$scope.comments = $firebaseArray(commentsRef);

	$scope.addComment = function(text) {
		$scope.comments.$add({text: text});
	};

});