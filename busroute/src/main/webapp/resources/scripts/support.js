/**
 * 
 */

var app = angular.module('busRouteApp', [ "ngRoute" ]);

app.controller('indexcontroller', function($scope, $http, $location) {

});

app.config(function($routeProvider) {
	$routeProvider.when("/", {
	templateUrl : "viewPackages.html",

		});
	$routeProvider.when("/packageView", {
	templateUrl : "viewPackageContent.html"
		});

	$routeProvider.when("/fileEdit", {
	templateUrl : "editFile.html"
		});
	$routeProvider.when("/fileView", {
	templateUrl : "viewFileContent.html"
		});

});