

var app = angular.module("devapp", ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl : 'views/articles/articles.html',
			controller : 'ArticlesCtrl'
			
		})
		.when('/a-propos',{
			templateUrl : 'views/home.html',
			controller : 'HomeCtrl'
		})
		.when('/article/:id',{
			templateUrl : 'views/articles/article.html',
			controller : 'ArticleCtrl'
		})
		.when('/categories',{
			templateUrl : 'views/categories/categories.html',
			controller : 'CategoryCtrl'
		})
		.when('/contact',{
			templateUrl : 'views/contact/contact.html',
			controller : 'ContactCtrl'
		})
		.otherwise({ redirectTo: '/' });
});