'use strict';

var cuApp = angular.module('cuApp', [
	'ngRoute',
	'cuAppManager'
]);

cuApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'assets/js/templates/overview.html',
				controller: 'cuOverviewManager',
				animation: 'third'
			}).
			when('/module/analytics', {
				templateUrl: 'assets/js/templates/analytics.html',
				controller: 'cuAnalyticsManager',
				animation: 'third'
			}).
			when('/module/events', {
				templateUrl: 'assets/js/templates/events.html',
				controller: 'cuEventManager',
				animation: 'third'
			}).
			when('/module/sports', {
				templateUrl: 'assets/js/templates/sports.html',
				controller: 'cuSportManager',
				animation: 'third'
			}).
			when('/module/maps', {
				templateUrl: 'assets/js/templates/maps.html',
				controller: 'cuMapManager',
				animation: 'third'
			}).
			when('/module/schedule', {
				templateUrl: 'assets/js/templates/schedule.html',
				controller: 'cuScheduleManager',
				animation: 'third'
			}).
			when('/module/users', {
				templateUrl: 'assets/js/templates/users.html',
				controller: 'cuUsersManager',
				animation: 'third'
			}).
			when('/module/styles', {
				templateUrl: 'assets/js/templates/styles.html',
				controller: 'cuStyleManager',
				animation: 'third'
			}).
			otherwise({
				redirectTo:'/'
			});
	}]);