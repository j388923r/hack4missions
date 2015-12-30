var myApp = angular.module('myApp');

myApp.controller('categoryController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.category = $routeParams.tag;
}]);