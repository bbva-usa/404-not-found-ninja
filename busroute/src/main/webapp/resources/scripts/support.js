

var app = angular.module('busRouteApp', [ "ngRoute"]);

app.service('login', function(){
	var logedIn = false;
	return {
		getLogin: function(){
			return logedIn;
		},
		setLogin: function(value){
			logedIn = value;
		}
	}
})

app.service('busses', function(){
	var Bus = {
		id: "",
		name: ""
	};
	return {
		getBus: function(){
			return Bus;
		},
		setBus: function(value){
			Bus = value;
		}
	}
});

app.config(function($routeProvider) {
	$routeProvider.when("/", {
	templateUrl : "dashboard.html",

		});
	$routeProvider.when("/login", {
		templateUrl : "login.html"
			});
	$routeProvider.when("/adminpage", {
		templateUrl : "adminpage.html"
			});

});

app.controller('adminController', function($scope,$location, login){
	$scope.adminLogged = login.getLogin();

});

app.controller('indexcontroller', function($scope, $http, $location) {

});
app.controller('dashboardController', function($scope, $http, $location, busses){
	$scope.alertExist = false;
	$scope.listAlerts = [];

	$scope.listBusses = [
    { id: 'BOE', name: 'Yellow'},
    { id: 'DE9', name: 'Green'},
    { id: 'GOES', name: 'Orange'},
    { id: 'RES', name: 'Pink'},
    { id: 'FHPS', name: 'Blue'}
	];

	function setBus(bus){
		busses.setBus(bus);
	}

	function getAlerts(){
		$scope.listAlerts = [];
	}
});

app.controller('mapViewController' , function($scope, $location){
	var busStopsFHPS = JSON.parse('{["Time" : "7:30 A.M.","Address" :	"Ave. C and 61st Street Back side of","Lat"	:"33.4984164","Long" : "-86.8967907"]}');
	var busStopsGOES = JSON.parse('{["Time" : "7:30 A.M.","Address" :	"Ave. C and 61st Street Back side of","Lat"	:"33.4984164","Long" : "-86.8967907"]}');

	var centerMap = {lat:33.4859402, lng:-86.9119366}
	var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

	function addMarker(position, map){
		let marker = new google.maps.Marker({
  		position:position,
  		icon:image,
  		map: map
  	});
	}

	function initMap(center, busStops) {
		var directionsService = new google.maps.DirectionsService();
		var directionsRenderer = new google.maps.DirectionsRenderer();

  	var myCenter =  center;
  	var map = new google.maps.Map(
  	document.getElementById('map'), {zoom: 12, center: myCenter});

  	for (i=0; i<size.busStops;i++){
  		let position = {lat:busStops[i].Lat, lng:busStops[i].Long};
  		addMarker(position,map);
  	}



  	var marker = new google.maps.Marker({
  		position:myCenter,
  		icon:image,
  		map: map
  	});

 		 directionsRenderer.setMap(map);


 		 map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          //calculateAndDisplayRoute(directionsService, directionsRenderer);
          // marker.
          window.setTimeout(function() {
          	map.panTo(marker.getPosition());
          }, 3000);
        });

  	marker.addListener('click', function() {
  		map.setZoom(15);
  		map.setCenter(marker.getPosition());
  	});


  	var onChangeHandler = function() {
  		calculateAndDisplayRoute(directionsService, directionsRenderer);
  	};
        //document.getElementById('start').addEventListener('change', onChangeHandler);
        //document.getElementById('end').addEventListener('change', onChangeHandler);
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  	directionsService.route(
  	{
  		origin: {query: 'chicago, il'},
  		destination: {query: 'st louis, mo'},
  		travelMode: 'DRIVING'
  	},
  	function(response, status) {
  		if (status === 'OK') {
  			directionsRenderer.setDirections(response);
  		} else {
  			window.alert('Directions request failed due to ' + status);
  		}
  	});
	}



});



app.controller('loginController', function($scope, $http, $location,$window, login){
	console.log("invoked");
	$scope.adminuser="admin";
	$scope.password="password";
	$scope.adminLogged=false;
	$scope.login = function(username,password){
		console.log("invoked");
		if(username==$scope.adminuser && password==$scope.password)
			{ 
			$scope.adminLogged=true;
			login.setLogin(true);
			$window.location.href ="#!/adminpage";
			}
	};

});