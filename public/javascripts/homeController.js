var myApp = angular.module('myApp');

myApp.controller('homeController', ['$scope', function($scope) {
  $scope.greetings = ['Hola!', 'afd'];
}]);