var myApp = angular.module('myApp');

myApp.controller('podcastsController', ['$scope', function($scope) {
  $scope.podcasts = [
  {
	  imageUrl: "",
	  title: "Demo Video1",
	  description: "Long Description"
  },
  {
	  imageUrl: "",
	  title: "Demo Video2",
	  description: "Long Description"
  },
  {
	  imageUrl: "",
	  title: "Demo Video3",
	  description: "Long Description"
  },
  {
	  imageUrl: "",
	  title: "Demo Video4",
	  description: "Long Description"
  },
  {
	  imageUrl: "",
	  title: "Demo Video5",
	  description: "Long Description"
  },
  {
	  imageUrl: "",
	  title: "Demo Video6",
	  description: "Long Description"
  }]
}]);