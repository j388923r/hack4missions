var myApp = angular.module('myApp');

myApp.controller('videosController', ['$scope', function($scope) {
  $scope.videos = [
  {
	  imageUrl: "https://vimeo.com/146273998",
	  title: "Demo Video1",
	  description: "Long Description"
  },
  {
	  imageUrl: "https://vimeo.com/146273998",
	  title: "Demo Video2",
	  description: "Long Description"
  },
  {
	  imageUrl: "https://vimeo.com/146273998",
	  title: "Demo Video3",
	  description: "Long Description"
  },
  {
	  imageUrl: "https://vimeo.com/146273998",
	  title: "Demo Video4",
	  description: "Long Description"
  },
  {
	  imageUrl: "https://vimeo.com/146273998",
	  title: "Demo Video5",
	  description: "Long Description"
  },
  {
	  imageUrl: "https://vimeo.com/146273998",
	  title: "Demo Video6",
	  description: "Long Description"
  }]
}]);