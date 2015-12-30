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
	  $scope.articles = data;
  });
  
  $scope.submitArticle = function() {
	  $http.post('/api/articles', {title: "Why is there so much low quality Christian stuff?", description: "Sometimes I talk with people who are serious Christ-followers and they share with me their disappointment and frustration about how Christians produce work of average (or worse) quality. The work could be in the arts (movie, media, music, song, painting, drawing, t-shirt design, posters, signs); the work could be a non-profit initiative (community service, social cause, service project, building maintenance, after-school tutoring); the work could be a ministry initiative (church worship service, evangelistic event, Christmas program).",
	  imageUrl: "http://www.ivpress.com/img/book/218h/5661.jpg", tags: ['creative'], link: "http://djchuang.com/2014/much-low-quality-christian-stuff/?utm_source=dlvr.it&utm_medium=twitter"}).success(function(data){
		  console.log(data);
	  });
	  $http.post('/api/articles', {title: "DESIGN THINKING... WHAT IS THAT?", description: "THE METHODOLOGY COMMONLY REFERRED TO AS DESIGN THINKING IS A PROVEN AND REPEATABLE PROBLEM-SOLVING PROTOCOL THAT ANY BUSINESS OR PROFESSION CAN EMPLOY TO ACHIEVE EXTRAORDINARY RESULTS.",
	  imageUrl: "http://f.fastcompany.net/multisite_files/fastcompany/imagecache/1280/poster/2015/04/919258-poster-p-1-design-thinking-what-is-it.jpg", tags: ['creative'], link: "http://www.fastcompany.com/919258/design-thinking-what"}).success(function(data){
		  console.log(data);
	  });
	  $http.post('/api/articles', {title: "Meet Christian Video Game-Makers", description: "How games with an empathetic twist are becoming a subgenre in the industry.",
	  imageUrl: "http://www.christianitytoday.com/images/58724.jpg?w=1280", tags: ['gaming'], link: "http://www.fastcompany.com/919258/design-thinking-what"}).success(function(data){
		  console.log(data);
	  });
	  $http.post('/api/articles', {title: "Meet Christian Video Game-Makers", description: "On social networks like Twitter and Facebook, few regularly mention their religious beliefs.",
	  imageUrl: "http://cdn.theatlantic.com/assets/media/img/mt/2014/11/shutterstock_1071678/lead_large.jpg?1430150561", tags: ['social'], link: "http://www.theatlantic.com/technology/archive/2014/11/are-americans-afraid-to-talk-about-their-faith-online/382428/"}).success(function(data){
		  console.log(data);
	  });
  };
}]);