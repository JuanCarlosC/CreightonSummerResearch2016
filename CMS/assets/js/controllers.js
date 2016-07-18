'use strict';

/*
Author: JuanCarlos Chavez
Date: 6/15/2016
*/


/******************************************************************************************
iCreighton PRODUCT CONTROLLERS
*******************************************************************************************/
var cuAppManager = angular.module('cuAppManager', []);


cuAppManager.controller('cuEventManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.title = "Event Module"
		$scope.featureView = 'data';
		$("[name='event-module-switch']").bootstrapSwitch();
		
	}]);


cuAppManager.controller('cuModuleManager', ['$scope','$rootScope', '$routeParams',
	function($scope, $rootScope, $routeParams) {
		$scope.title = "General"
		$scope.featureView = 'data';

		$.fn.bootstrapSwitch.defaults.onColor = 'success';
	}]);

cuAppManager.controller('cuOverviewManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.title = "Overview"
		$scope.featureView = 'data';
	}]);
cuAppManager.controller('cuAnalyticsManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.title = "Analytics Module";
		$scope.featureView = 'data';
	}]);
cuAppManager.controller('cuSportManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.title = "Sport Module";
		$scope.featureView = 'data';
	}]);
cuAppManager.controller('cuMapManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.title = "Map Module";
		$scope.featureView = 'data';
	}]);
cuAppManager.controller('cuScheduleManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.title = "Schedule Module";
		$scope.featureView = 'data';
	}]);
cuAppManager.controller('cuUsersManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.title = "Users Module";
		$scope.featureView = 'data';
	}]);
cuAppManager.controller('cuStyleManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.title = "Style Module";
		$scope.featureView = 'data';
	}]);