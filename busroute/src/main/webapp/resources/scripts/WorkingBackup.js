function initMap() {
	var directionsService = new google.maps.DirectionsService();
	var directionsRenderer = new google.maps.DirectionsRenderer();
	var myCenter =  {lat: 33.474912, lng: -86.910001};
	var routes = [{"Time":"7:30 A.M.","Address":"Ave. C and 61st Street Back side of","Lat":"33.4984164","Long":"-86.8967907"},
	{"Time":"7:33 A.M.","Address":"Avenue C and Jerry D. Coleman","Lat":"33.4758812","Long":"-86.9173647"},
	{"Time":"7:35 A.M.","Address":"61st Street and Myron Massey Blvd.","Lat":"33.4769925","Long":"-86.9094935"},
	{"Time":"7:32 A.M.","Address":"60th Street and Myron Massey Blvd.","Lat":"33.4771589","Long":"-86.9093703"}];
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: myCenter});

  let marker = new google.maps.Marker({
  	position:myCenter,
  	icon:image,
  	map: map
  });

  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  function addMarker(position, map){
  	let marker = new google.maps.Marker({
  		position:position,
  		icon:image,
  		map: map
  	});
  };
  directionsRenderer.setMap(map);

  let Start = [];
  let End = [];
  let waypts = [];
  Start.push(routes[0].Lat+ ','+ routes[0].Long);
  End.push(routes[routes.length-1].Lat+ ','+ routes[routes.length-1].Long);
  
  for (let j =0; j<routes.length-1;j++) {
  	waypts.push({
  		location: routes[j].Lat+ ','+ routes[j].Long,
		stopover: true
			});
  };

  console.log('routes: ', Start, End, waypts);


  calculateAndDisplayRoute(directionsService, directionsRenderer, Start,End,waypts);
  console.log('After function: ');

   //map.setZoom(15);
   //map.setCenter(marker.getPosition());


}

function calculateAndDisplayRoute(directionsService, directionsRenderer, source, destination, inbetween) {
	directionsService.route(
	{
		origin: {query: source},
		destination: {query: destination},
		// waypoints: inbetween,
		// optimizeWaypoints: true,
		travelMode: 'DRIVING'
	},
	function(response, status) {
		if (status === 'OK') {
			directionsRenderer.setDirections(response);
			var route = response.routes[0];
			console.log('Routes', route);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
};

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
	$routeProvider.when("/mapview", {
		templateUrl : "mapView.html"
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
	initMap();
	
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


