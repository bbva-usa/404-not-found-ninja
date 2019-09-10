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

app.controller('dashboardController', function($scope, $http, $location){

});

app.controller('mapViewController' , function($scope, $location){
	$busStopsFHPS = JSON.parse('{["Time" : "7:30 A.M.","Address" :	"Ave. C and 61st Street Back side of","Lat"	:"33.4984164","Long" : "-86.8967907"]}');
	$busStopsGOES = JSON.parse('{["Time" : "7:30 A.M.","Address" :	"Ave. C and 61st Street Back side of","Lat"	:"33.4984164","Long" : "-86.8967907"]}');

});