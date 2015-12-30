var myApp = angular.module('myApp');

myApp.controller('articleController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/api/articles/' + $routeParams.id).success(function(data){
	  console.log("data", data);
	  $scope.article = data;
  });
}]);