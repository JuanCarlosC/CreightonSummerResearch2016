'use strict';

var cuApp = angular.module('cuApp', [
	'ngRoute',
	'cuAppManager'
]);

cuApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/MioSimpleDesigner/edit/:orderId', {
				templateUrl: '../assets/partials/mio-design-edit.html',
				controller: 'mioDesignerEditCtrl'
			}).
			otherwise({
				redirectTo:'/'
			});
	}]);