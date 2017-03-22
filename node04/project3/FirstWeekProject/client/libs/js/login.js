var myApp = angular.module('loginApp', ['commonApp']);
myApp.controller('logincontroller', ['$scope', '$http', function ($scope, $http) {
	$scope.btn = function(){
		var _data =	{
				username: $scope.loginuser,
				password: $scope.loginpsd
		};
		$http({
			url: common.baseurl + 'login',
			method: 'post',
			data: _data
		}).success(function(response){
			console.log(response);
		})
	};
}])