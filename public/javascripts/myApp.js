// Create a new module
var myApp = angular.module('myApp', [
	'ngAnimate',
	'ngRoute'
]);

// configure existing services inside initialization blocks.
myApp.config(['$routeProvider', function($routeProvider) {
  // Configure existing providers
  $routeProvider.when('/', {
	  controller : 'homeController',
	  templateUrl : '/angularviews/home.html'
  });
}]);