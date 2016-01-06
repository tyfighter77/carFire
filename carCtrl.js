app.controller('carCtrl', function($scope, $stateParams, carsService){
  var currentCarId = $stateParams.carId;
  $scope.car = carsService.getCar(currentCarId);

  $scope.createNewComment = function(comment) {
    carsService.addComment(comment, currentCarId);
  };

 $scope.comments = carsService.getComments(currentCarId);

});
