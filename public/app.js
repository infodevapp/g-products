

var app = angular.module("devapp", ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl : 'views/home.html',
			controller : 'HomeCtrl'
		})
		.when('/articles',{
			templateUrl : 'views/articles/articles.html',
			controller : 'ArticlesCtrl'
		})
		.when('/article/:id',{
			templateUrl : 'views/articles/article.html',
			controller : 'ArticleCtrl'
		})
		.when('/categories',{
			templateUrl : 'views/categories/categories.html',
			controller : 'CategoryCtrl'
		})
		.when('/Contact',{
			templateUrl : 'views/Contact/contact.html',
			controller : 'ContactCtrl'
		})
		.otherwise({ redirectTo: '/articles' })
});