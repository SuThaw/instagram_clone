angular.module('Instagram',['ngRoute','ngMessages','satellizer'])
	.config(function($routeProvider,$authProvider){
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

		$authProvider.loginUrl = "http://localhost:3000/auth/login";
		$authProvider.signupUrl = "http://localhost:3000/auth/signup";
		$authProvider.oauth2({
			name:'instagram',
			url:'http://localhost:3000/auth/instagram',
			redirectUri:'http://localhost:8000',
			clientId:'dc5adbde90454f72b0254183a927277c',
			requiredUrlParams: ['scope'],
			scope:['likes'],
			scopeDelimiter: '+',
			authorizationEndpoint:'https://api.instagram.com/auth/authorize'
			
		});
	});