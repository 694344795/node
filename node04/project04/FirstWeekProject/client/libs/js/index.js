//var message = require('../model/message.model.js');
var indexapp = angular.module('indexapp', ['commonApp']);
indexapp.controller('indexcontroller', ['$scope', '$http', function($scope, $http) {
		$scope.name=11111111;
	console.log(11111111111);
	$http.get({
		url:'http://localhost:888/index'
	}).success(function(res) {
			console.log(res);
			console.log(typeof res);
		}
	})
}])