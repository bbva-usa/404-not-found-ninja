function initMap() {
      var directionsService = new google.maps.DirectionsService;
      var directionsRenderer = new google.maps.DirectionsRenderer;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: 32.318230, lng:  -86.902298}
      });
      directionsRenderer.setMap(map);

     
   window.onload = calculateAndDisplayRoute(directionsService, directionsRenderer);

}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {

   var routes = [{"Time":"7:30 A.M.","Address":"Ave. C and 61st Street Back side of","Lat":"33.4984164","Long":"-86.8967907"},
      {"Time":"7:33 A.M.","Address":"Avenue C and Jerry D. Coleman","Lat":"33.4758812","Long":"-86.9173647"},
      {"Time":"7:35 A.M.","Address":"61st Street and Myron Massey Blvd.","Lat":"33.4769925","Long":"-86.9094935"},
      {"Time":"7:32 A.M.","Address":"60th Street and Myron Massey Blvd.","Lat":"33.4771589","Long":"-86.9093703"}];
   
  let start = [];
  let end = [];
  let waypts = [];
  start.push(parseFloat(routes[0].Lat)+ ','+ parseFloat(routes[0].Long));
  end.push(parseFloat(routes[routes.length-1].Lat)+ ','+ parseFloat(routes[routes.length-1].Long));
  
  
  for (let j =1; j<routes.length-1;j++) {
    waypts.push({
      location: parseFloat(routes[j].Lat)+ ','+ parseFloat(routes[j].Long),
      stopover: true
    });
   
  };
  console.log('routes: ', start, end, waypts);
  directionsService.route({
    origin: start[0],
    destination: end[0],
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
  });
};

var app = angular.module('busRouteApp', [ "ngRoute","ngCookies"]);


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

app.controller('adminController', function($scope,$location,$window, $http,$cookies, $cookieStore){
	$scope.adminLogged = $cookieStore.get('userlogged');
$scope.listAlerts = [];
	
	$http.get("rest/alerts",{},{headers: {'Content-Type': 'application/json'} }).then(function(data){
		if(data.data.length>0)
			{
			$scope.listAlerts=data.data;
			$scope.alertExist=true;
			
			}
		
		   });
	
	$scope.deleteAllAlerts = function(){
		
		$http.delete("rest/alerts",{},{headers: {'Content-Type': 'application/json'} }).then(function(data){  });
	};
	
$scope.deleteAllAlerts = function(){
		
		$http.delete("rest/alerts",{},{headers: {'Content-Type': 'application/json'} }).then(function(data){  });
		location.reload();
	};

$scope.deleteAlert = function(message){
		
		$http.delete("rest/alerts/"+message,{},{headers: {'Content-Type': 'application/json'} }).then(function(data){  });
		location.reload();
	};

$scope.deleteAlert = function(message){
		
		$http.delete("rest/alerts/"+message,{},{headers: {'Content-Type': 'application/json'} }).then(function(data){  });
		location.reload();
	};
	
$scope.pushAlert = function(message){
		
		$http.post("rest/alerts/"+message,{},{headers: {'Content-Type': 'application/json'} }).then(function(data){  });
		location.reload();
	};

});

app.controller('indexcontroller', function($scope, $http, $location) {

});
app.controller('dashboardController', function($scope, $http, $location, busses){
	$scope.alertExist = false;
	$scope.listAlerts = [];
	
	$http.get("rest/alerts",{},{headers: {'Content-Type': 'application/json'} }).then(function(data){
		if(data.data.length>0)
			{
			$scope.listAlerts=data.data;
			$scope.alertExist=true;
			
			}
		
		   });
	

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



app.controller('loginController', function($scope, $http, $location,$window, $cookies, $cookieStore){
	console.log("invoked");
	$scope.adminuser="admin";
	$scope.password="password";
	$scope.adminLogged=false;
	$scope.login = function(username,password){
		console.log("invoked");
		if(username==$scope.adminuser && password==$scope.password)
		{ 
			$scope.adminLogged=true;
			$cookieStore.put('userlogged',true)
			$window.location.href ="#!/adminpage";
		}
	};

});  


