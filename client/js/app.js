angular.module('Instagram',['ngRoute','ngMessages'])
	.config(function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl:'views/home.html',
				controller:'HomeCtrl'
			})
			.when('/login',{
				templateUrl:'views/login.html',
				controller:'LoginCtrl'

			})
			.when('/signup',{
				templateurl:'views/signup.html',
				controller:'SignupCtrl'
			})
			.when('/photo/:id',{
				templateurl:'views/detail.html',
				controller:'DetailCtrl'
			})
			.otherwise('/')
	});