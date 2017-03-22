var loginApp = angular.module('loginApp', ['commonApp']);
loginApp.controller('logincontroller', ['$scope', '$http', function($scope, $http) {
	$scope.btn = function() {
		var _data = {
			username: $scope.loginuser,
			password: $scope.loginpsd
		};
		console.log(_data);
		$http({
			url: common.baseurl + 'login',
			method: 'post',
			data: _data
		}).success(function(res) {
			console.log(res);
			if (res) {
				self.location.href="index.html";
			}
		})
	}
}])