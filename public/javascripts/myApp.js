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
  }).when('/learn', {
	  controller : 'learnController',
	  templateUrl : '/angularviews/learn.html'
  }).when('/connect', {
	  controller : 'connectController',
	  templateUrl : '/angularViews/connect.html'
  }).when('/category', {
	  controller : 'categoryController',
	  templateUrl : '/angularViews/category.html'
  }).when('/articles', {
	  controller : 'articlesController',
	  templateUrl : '/angularviews/articles.html'
  }).when('/articles/:id', {
	  controller : 'articleController',
	  templateUrl : '/angularviews/article.html'
  }).when('/videos', {
	  controller : 'videosController',
	  templateUrl : '/angularviews/videos.html'
  }).when('/videos/:id', {
	  controller : 'videoController',
	  templateUrl : '/angularviews/video.html'
  }).when('/podcasts', {
	  controller : 'podcastsController',
	  templateUrl : '/angularviews/podcasts.html'
  }).when('/podcasts/:id', {
	  controller : 'podcastController',
	  templateUrl : '/angularviews/podcast.html'
  }).when('/ask', {
	  controller : 'askController',
	  templateUrl : '/angularviews/ask.html'	 
  });
}]);