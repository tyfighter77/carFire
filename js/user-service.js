angular.module('carFire').service('userService', function($firebaseAuth, $state) {

	var ref = new Firebase('https://cahlan-firecar.firebaseio.com/');
	var auth = $firebaseAuth(ref);

	//user inititated

	this.register = function(newUser) {
		return auth.$createUser(newUser);
	};

	this.login = function(user) {
		return auth.$authWithPassword(user);	
	};

	this.logout = function() {
		return auth.$unauth();
	};

	//"browser" initiated (when app is loaded)
	this.getAuth = function() {
		return auth.$getAuth();
	}

	//Firebase initiated
	auth.$onAuth(function(authData) {
		if (authData) {
			console.log("authenticated");
		}
		else {
			console.log("not authenticated");
			if ($state) {
				$state.go('login');
			}
		}
	});
});