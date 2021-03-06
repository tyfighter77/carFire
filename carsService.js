app.service('carsService', function($firebaseObject, $firebaseArray){
  var url = 'https://car-fire-tyhill.firebaseio.com/';


  this.addCar = function(newCar) {
      var ref = new Firebase(url + 'cars');
      return $firebaseArray(ref).$add(newCar);
  };

  this.getCars = function() {
      var ref = new Firebase(url + 'cars');
      return $firebaseArray(ref);
  };

  this.getCar = function(carId) {
      var ref = new Firebase(url + 'cars/' + carId);
      return $firebaseObject(ref);
  };

  this.getComments = function(carId) {
      var ref = new Firebase(url + 'comments/' + carId);
      return $firebaseArray(ref);
  };

  this.addComment = function(comment, carId){
      var ref = new Firebase(url + 'comments/' + carId);
      return $firebaseArray(ref).$add(comment);
  };

});
