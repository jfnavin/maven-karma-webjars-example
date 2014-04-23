
var app = angular.module('exampleApp',[]);

app.controller('greetingController', ['$scope', function($scope){
	$scope.greeting = 'Controller says hi!';
}]);