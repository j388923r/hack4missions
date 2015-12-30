var myApp = angular.module('myApp');

myApp.controller('articlesController', ['$scope', '$http', function($scope, $http) {
  $scope.articles = [
  {
	  id: 1,
	  imageUrl: "",
	  title: "Demo Video1",
	  description: "Long Description"
  },
  {
	  id: 2,
	  imageUrl: "",
	  title: "Demo Video2",
	  description: "Long Description"
  },
  {
	  id: 3,
	  imageUrl: "",
	  title: "Demo Video3",
	  description: "Long Description"
  },
  {
	  id: 4,
	  imageUrl: "",
	  title: "Demo Video4",
	  description: "Long Description"
  },
  {
	  id: 5,
	  imageUrl: "",
	  title: "Demo Video5",
	  description: "Long Description"
  },
  {
	  id: 6,
	  imageUrl: "",
	  title: "Demo Video6",
	  description: "Long Description"
  }];
  
  $http.get('/api/articles').success(function(data){
	  console.log("data", data);
  });
  
  $scope.submitArticle = function() {
	  $http.post('/api/articles', {title: , description: , imageUrl: , link: }).success(function(data){
		  console.log(data);
	  })
  };
}]);