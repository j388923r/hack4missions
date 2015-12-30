var myApp = angular.module('myApp');

myApp.controller('askController', ['$scope', function($scope) {

	$scope.submitQuestion = function() {
		$http.post('/api/ask', {name: $scope.name, email: $scope.email, question: $scope.question}).success(function() {
			
		});
	}
}]);