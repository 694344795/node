var myApp = angular.module('myApp', ['commonApp']);
myApp.controller('myController', ['$scope', '$http', function ($scope, $http) {
	$scope.submit = function(){
		var _data =	{
				firstname: $scope.firstname, 
				lastname: $scope.lastname, 
				username: $scope.username,
				password: $scope.password,
				email: $scope.email
		};
		$http({
			url: common.baseurl + 'register',
			method: 'post',
			data: _data
		}).success(function(response){
			console.log(response);
		})
	};
}])