var myApp = angular.module('myApp', ['commonApp']);
myApp.controller('myController', ['$scope', '$http', function ($scope, $http) {
	$scope.submit = function(){
		var _data =	{
				username: $scope.username,
				password: $scope.password
		};
		$http({
			url: common.baseurl + 'login',
			method: 'post',
			data: _data
		}).success(function(res){
			console.log(res);
			console.log(res.obj.state);
			console.log(typeof res.obj.state);
			if (res.obj.state =='false') {
				alert('没有该用户');
			} else{
				self.location.href="../index";
			}
		})
	};
}])