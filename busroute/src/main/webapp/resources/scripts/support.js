function initMap(selectedBus) {
  var routeFHPS_AM = [{"Time" : "7:30 A.M.","Address" :  "Ave. C and 61st Street Back side of","Lat"  :"33.4984164","Long" : "-86.8967907"},{"Time" : "7:33 A.M.","Address" :  "Avenue C and Jerry D. Coleman","Lat"  :"33.4758812","Long" : "-86.9173647"},{"Time" : "7:35 A.M.","Address" :  "61st Street and Myron Massey Blvd.","Lat"  :"33.4769925","Long" : "-86.9094935"},{"Time" : "7:32 A.M.","Address" :  "60th Street and Myron Massey Blvd.","Lat"  :"33.4771589","Long" : "-86.9093703"},{"Time" : "7:33 A.M.","Address" :  "Myron Massey Blvd. and 55th Place","Lat"  :"33.4827151","Long" : "-86.9092874"},{"Time" : "7:35 A.M.","Address" :  "Myron Massey Blvd. and 53rd Place","Lat"  :"33.4823689","Long" : "-86.9092869"},{"Time" : "7:37 A.M.","Address" :  "516 54th Street (Middle of the block)","Lat"  :"33.4842922","Long" : "-86.9128126"},{"Time" : "7:41 A.M.","Address" :  "54th and Avenue D","Lat"  :"33.4825863","Long" : "-86.9116957"},{"Time" : "7:43 A.M.","Address" :  "5174 Hillside Drive","Lat"  :"33.4868579","Long" : "-86.9139871"},{"Time" : "7:44 A.M.","Address" :  "721 Court G","Lat"  :"33.5299801","Long" : "-86.8849877"},{"Time" : "7:50 A.M.","Address" :  "Glen Oaks Elementary School","Lat"  :"33.4912583","Long" : "-86.9104421"}];
  var routeFHPS_PM = [{"Time" : "3:45 P.M.","Address" :  "Glen Oaks Elementary School","Lat"  :"33.4912583","Long" : "-86.9104421"},{"Time" : "3:46 P.M.","Address" :  "5174 Hillside Drive","Lat"  :"33.4868579","Long" : "-86.9139871"},{"Time" : "3:49 P.M.","Address" :  "721 Court G","Lat"  :"33.5299801","Long" : "-86.8849877"},{"Time" : "3:51 P.M.","Address" :  "53rd Street and Court H","Lat"  :"33.4804248","Long" : "-86.9064393"},{"Time" : "3:52 P.M.","Address" :  "Myron Massey Blvd. and Court H","Lat"  :"33.482348","Long" : "-86.9071609"},{"Time" : "3:53 P.M.","Address" :  "Myron Massey Blvd. and 53rd Place","Lat"  :"33.4823689","Long" : "-86.9092869"},{"Time" : "3:54 P.M.","Address" :  "Myron Massey and 55th Place","Lat"  :"33.4827151","Long" : "-86.9092874"},{"Time" : "3:57 P.M.","Address" :  "516 54th Street (Middle of the block)","Lat"  :"33.4842922","Long" : "-86.9128126"},{"Time" : "3:58 P.M.","Address" :  "52nd Street and Avenue D","Lat"  :"33.485488","Long" : "-86.91497"},{"Time" : "3:59 P.M.","Address" :  "54th and Avenue D","Lat"  :"33.4825863","Long" : "-86.9116957"},{"Time" : "4:00 P.M.","Address" :  "55th and Avenue D","Lat"  :"33.482962","Long" : "-86.912922"},{"Time" : "4:04 P.M.","Address" :  "56TH Street and Terrace Avenue","Lat"  :"33.4822222","Long" : "-86.9186264"},{"Time" : "4:06 P.M.","Address" :  "60th Street and Terrace Avenue","Lat"  :"33.4773587","Long" : "-86.9083505"},{"Time" : "4:07 P.M.","Address" :  "Avenue C and Jerry D. Coleman","Lat"  :"33.477358","Long" : "-86.9061628"},{"Time" : "4:08 P.M.","Address" :  "Avenue D and Jerry D. Coleman","Lat"  :"33.4758712","Long" : "-86.9159008"},{"Time" : "4:09 P.M.","Address" :  "Court E and Jerry D. Coleman","Lat"  :"33.4758549","Long" : "-86.9110933"},{"Time" : "4:10 P.M.","Address" :  "Court F and Jerry D. Coleman","Lat"  :"33.4756233","Long" : "-86.9099983"},{"Time" : "4:12 P.M.","Address" :  "61st Street and Myron Massey Blvd.","Lat"  :"33.476847","Long" : "-86.9095797"},{"Time" : "4:16 P.M.","Address" :  "60th Street and Myron Massey Blvd.","Lat"  :"33.4771589","Long" : "-86.9093703"}];
  var routeGOES_AM = [{"Time": "7:21 A.M.", "Address":  "Parkridge Ave and Westfield Drive", "Lat":  "33.453686", "Long": "-86.93382"},{ "Time": "7:22 A.M.", "Address":  "929 Westfield Drive", "Lat":  "33.4526138", "Long": "-86.9353981"},{ "Time": "7:22 A.M.", "Address":  "817 Westfield Drive", "Lat":  "33.4551111", "Long": "-86.9373155"},{ "Time": "7:24 A.M.", "Address":  "619 Westfield Drive", "Lat":  "33.4577531", "Long": "-86.93802"},{ "Time": "7:26 A.M.", "Address":  "1000 Hillandale Dr. (Oakland Dr. side)", "Lat":  "33.4539601", "Long": "-86.9403287"},{ "Time": "7:27 A.M.", "Address":  "900 Glen Oaks Drive (Hillandale Dr. Side)", "Lat":  "33.4563187", "Long": "-86.9411618"},{ "Time": "7:27 A.M.", "Address":  "1000 Glen Oaks Drive", "Lat":  "33.4557422", "Long": "-86.9398591"},{ "Time": "7:28 A.M.", "Address":  "800 Glen Crest Dr. (Park Ave. side)", "Lat":  "33.455494", "Long": "-86.9389742"},{ "Time": "7:29 A.M.", "Address":  "846 Park Ave.", "Lat":  "33.4542869", "Long": "-86.9353883"},{ "Time": "7:30 A.M.", "Address":  "824 Fairfax Drive", "Lat":  "33.4562005", "Long": "-86.9335979"},{ "Time": "7:31 A.M.", "Address":  "407 Glen Crest Drive", "Lat":  "33.457477", "Long": "-86.9330304"},{ "Time": "7:32 A.M.", "Address":  "345 Glen Crest Drive", "Lat":  "33.4575006", "Long": "-86.931328"},{ "Time": "7:33 A.M.", "Address":  "Glen Oaks Elementary School", "Lat":  "33.4596563", "Long": "-86.9301173"}]; 
  var routeGOES_PM = [{"Time": "4:05 P.M.", "Address": "Glen Oaks Elementary School"  ,"Lat": "33.4596563","Long": "-86.9301173"},{ "Time": "4:07 P.M.", "Address": "Parkridge Ave and Westfield Drive"  ,"Lat": "33.453686","Long": "-86.93382"},{ "Time": "4:07 P.M.", "Address": "929 Westfield Drive"  ,"Lat": "33.4526138","Long": "-86.9353981"},{ "Time": "4:08 P.M.", "Address": "817 Westfield Drive"  ,"Lat": "33.4551111","Long": "-86.9373155"},{ "Time": "4:09 P.M.", "Address": "619 Westfield Drive"  ,"Lat": "33.4577531","Long": "-86.93802"},{ "Time": "4:11 P.M.", "Address": "1000 Hillandale Dr. (Oakland Dr. side)"  ,"Lat": "33.4539601","Long": "-86.9403287"},{ "Time": "4:11 P.M.", "Address": "900 Glen Oaks Drive (Hillandale Dr. Side)"  ,"Lat": "33.4563187","Long": "-86.9411618"},{ "Time": "4:12 P.M.", "Address": "1000 Glen Oaks Drive"  ,"Lat": "33.4557422","Long": "-86.9398591"},{ "Time": "4:12 P.M.", "Address": "800 Glen Crest Dr. (Park Ave. side)"  ,"Lat": "33.455494","Long": "-86.9389742"},{ "Time": "4:13 P.M.", "Address": "846 Park Ave."  ,"Lat": "33.4542869","Long": "-86.9353883"},{ "Time": "4:14 P.M.", "Address": "824 Fairfax Drive"  ,"Lat": "33.4562005","Long": "-86.9335979"},{ "Time": "4:15 P.M.", "Address": "407 Glen Crest Drive"  ,"Lat": "33.457477","Long": "-86.9330304"},{ "Time": "4:16 P.M.", "Address": "345 Glen Crest Drive"  ,"Lat": "33.4575006","Long": "-86.931328"}];
  var routeGOESA_AM = [{"Time": "6:45 A.M.", "Address": "Partridge Ave and Westfield Drive"  ,"Lat": "33.4536852","Long": "-86.9335754"},{"Time": "6:46 A.M.", "Address": "929 Westfield Drive"  ,"Lat": "33.4526183","Long": "-86.9353981"},{"Time": "6:47 A.M.", "Address": "817 Westfield Drive"  ,"Lat": "33.4551156","Long": "-86.9373155"},{"Time": "6:49 A.M.", "Address": "619 Westfield Drive"  ,"Lat": "33.4577576","Long": "-86.93802"},{"Time": "6:51 A.M.", "Address": "1000 Hillandale Dr. (Oakland Dr. side)"  ,"Lat": "33.4539646","Long": "-86.9403287"},{"Time": "6:53 A.M.", "Address": "900 Glen Oaks Drive (Hillandale Dr. Side)"  ,"Lat": "33.4534189","Long": "-86.9382555"},{"Time": "6:54 A.M.", "Address": "1000 Glen Oaks Drive"  ,"Lat": "33.4557467","Long": "-86.9398591"},{"Time": "6:55 A.M.", "Address": "800 Glen Crest Dr. (Park Ave. si"  ,"Lat": "33.4561792","Long": "-86.9366249"},{"Time": "6:56 A.M.", "Address": "846 Park Ave."  ,"Lat": "33.4542914","Long": "-86.9353883"},{"Time": "6:57 A.M.", "Address": "824 Fairfax Drive"  ,"Lat": "33.456205","Long": "-86.9335979"},{"Time": "6:58 A.M.", "Address": "407 Glen Crest Drive"  ,"Lat": "33.4574815","Long": "-86.9330304"},{"Time": "6:59 A.M.", "Address": "345 Glen Crest Drive"  ,"Lat": "33.4575051","Long": "-86.931328"},{"Time": "7:02 A.M.", "Address": "1184 Red Oak Circle"  ,"Lat": "33.4630424","Long": "-86.9305844"},{"Time": "7:05 A.M.", "Address": "Millstead Road and Post Oak Circ"  ,"Lat": "33.4644501","Long": "-86.9335235"},{"Time": "7:06 A.M.", "Address": "1101 Cambridge Circle"  ,"Lat": "33.4659652","Long": "-86.931916"},{"Time": "7:08 A.M.", "Address": "1420 Cambridge Blvd"  ,"Lat": "33.4685963","Long": "-86.933187"},{"Time": "7:10 A.M.", "Address": "924 Live Oak Circle"  ,"Lat": "33.4644457","Long": "-86.9378243"},{"Time": "7:11 A.M.", "Address": "400 Live Oak Circle"  ,"Lat": "33.4623402","Long": "-86.9375895"},{"Time": "7:13 A.M.", "Address": "1033 Grand oaks Road"  ,"Lat": "33.4629035","Long": "-86.9355937"},{"Time": "7:14 A.M.", "Address": "1016 Griswold Road (Glenfair Dr."  ,"Lat": "33.4617195","Long": "-86.9354763"},{"Time": "7:16 A.M.", "Address": "604 Glen Park Drive"  ,"Lat": "33.4594241","Long": "-86.9364155"},{"Time": "7:17 A.M.", "Address": "644 Glen Park Drive"  ,"Lat": "33.4572753","Long": "-86.9362895"},{"Time": "7:19 A.M.", "Address": "700 Fairfax Drive"  ,"Lat": "33.4595869","Long": "-86.933896"},{"Time": "7:21 A.M.", "Address": "Chateau Glen Oaks"  ,"Lat": "33.462179","Long": "-86.9319346"},{"Time": "7:27 A.M.", "Address": "Glen Oaks Elementary School"  ,"Lat": "33.4596563","Long": "-86.9301173"}];
  var routeGOESA_PM = [{"Time": "2:52 P.M.", "Address": "Glen Oaks Elementary School" ,"Lat": "33.4596563","Long": "-86.9301173"},{"Time": "2:53 P.M.", "Address": "Chateau Glen Oaks" ,"Lat": "33.462179","Long": "-86.9319346"},{"Time": "2:55 P.M.", "Address": "700 Fairfax Drive" ,"Lat": "33.4595869","Long": "-86.933896"},{"Time": "2:58 P.M.", "Address": "929 Westfield Drive" ,"Lat": "33.4526183","Long": "-86.9353981"},{"Time": "3:00 P.M.", "Address": "817 Westfield Drive" ,"Lat": "33.4551156","Long": "-86.9373155"},{"Time": "3:03 P.M.", "Address": "619 Westfield Drive" ,"Lat": "33.4577576","Long": "-86.93802"},{"Time": "3:07 P.M.", "Address": "1000 Hillandale Dr. (Oakland Dr. side)" ,"Lat": "33.4539646","Long": "-86.9403287"},{"Time": "3:08 P.M.", "Address": "900 Glen Oaks Drive (Hillandale Dr. Side)" ,"Lat": "33.4534189","Long": "-86.9382555"},{"Time": "3:07 P.M.", "Address": "1000 Glen Oaks Drive" ,"Lat": "33.4557467","Long": "-86.9398591"},{"Time": "3:08 P.M.", "Address": "800 Glen Crest Dr. (Park Ave. si" ,"Lat": "33.4561792","Long": "-86.9366249"},{"Time": "3:09 P.M.", "Address": "846 Park Ave." ,"Lat": "33.4542914","Long": "-86.9353883"},{"Time": "3:11 P.M.", "Address": "824 Fairfax Drive" ,"Lat": "33.456205","Long": "-86.9335979"},{"Time": "3:12 P.M.", "Address": "407 Glen Crest Drive" ,"Lat": "33.4574815","Long": "-86.9330304"},{"Time": "3:13 P.M.", "Address": "345 Glen Crest Drive" ,"Lat": "33.4575051","Long": "-86.931328"},{"Time": "3:16 P.M.", "Address": "1184 Red Oak Circle" ,"Lat": "33.4630424","Long": "-86.9305844"},{"Time": "3:17 P.M.", "Address": "Millstead Road and Post Oak Circ" ,"Lat": "33.4644501","Long": "-86.9335235"},{"Time": "3:19 P.M.", "Address": "1101 Cambridge Circle" ,"Lat": "33.4659652","Long": "-86.931916"},{"Time": "3:20 P.M.", "Address": "1420 Cambridge Blvd" ,"Lat": "33.4685963","Long": "-86.933187"},{"Time": "3:23 P.M.", "Address": "924 Live Oak Circle" ,"Lat": "33.4644457","Long": "-86.9378243"},{"Time": "3:24 P.M.", "Address": "400 Live Oak Circle" ,"Lat": "33.4623402","Long": "-86.9375895"},{"Time": "3:25 P.M.", "Address": "1033 Grand oaks Road" ,"Lat": "33.4629035","Long": "-86.9355937"},{"Time": "3:26 P.M.", "Address": "1016 Griswold Road (Glenfair Dr." ,"Lat": "33.4617195","Long": "-86.9354763"},{"Time": "3:29 P.M.", "Address": "604 Glen Park Drive" ,"Lat": "33.4594241","Long": "-86.9364155"},{"Time": "3:30 P.M.", "Address": "644 Glen Park Drive" ,"Lat": "33.4572753","Long": "-86.9362895"}];

console.log('bus:', selectedBus);




if(selectedBus === undefined){
	selectedBus = { id: 'FHPS', name: 'Blue-(Morning)', AMPM: 'AM'};
}


let selectedbusObject = routeFHPS_AM;
  if(selectedBus.id === "BOE"){
  	if(selectedBus.AMPM === "AM")
  		 selectedbusObject = routeBOE_AM;
  		else
  		  selectedbusObject = routeBOE_PM;

  } else if(selectedBus.id === "DE9"){
  	if(selectedBus.AMPM === "AM")
  		 selectedbusObject = routeDE9_AM;
  		else
  		  selectedbusObject = routeDE9_PM;
  } else if(selectedBus.id === "GOES"){
  	if(selectedBus.AMPM === "AM")
  		 selectedbusObject = routeGOES_AM;
  		else
  		  selectedbusObject = routeGOES_PM;

  }else if(selectedBus.id === "RES"){
  		if(selectedBus.AMPM === "AM")
  		 selectedbusObject = routeRES_AM;
  		else
  		  selectedbusObject = routeRES_PM;

  }else if(selectedBus.id === "FHES"){
		if(selectedBus.AMPM === "AM")
  		 selectedbusObject = routeFHES_AM;
  		else
  		  selectedbusObject = routeFHES_PM;

  }


  var directionsService = new google.maps.DirectionsService;
  var directionsRenderer = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 32.318230, lng:  -86.902298}
  });
  directionsRenderer.setMap(map);

  window.onload = calculateAndDisplayRoute(directionsService, directionsRenderer, selectedbusObject);
   
};

function addSchool(position, map){
  var icon = {
    url: "resources/images/school.png", // url
    scaledSize: new google.maps.Size(100, 100), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };


  let marker = new google.maps.Marker({ 
  position:position, 
  //icon: icon,
  map: map 
  });
}
function calculateAndDisplayRoute(directionsService, directionsRenderer, routes) {
    
   
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
      //addSchool({lat: 32.318230, lng:  -86.902298}, map);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
  });
};

var app = angular.module('busRouteApp', [ "ngRoute","ngCookies"]);


app.service('busses', function(){
	var Bus = {
		id: "",
		name: "",
		AMPM: ""
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

app.service('ampms', function(){
	var ampm = {
		id: "",
		name: ""
	};
	return {
		getAmpm: function(){
			return ampm;
		},
		setAmpm: function(value){
			ampm = value;
		}
	}
});


app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "mapView.html",

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
	
	$routeProvider.when("/logout", {
		templateUrl : "logout.html"
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
		$window.location.href ="#!/blank";
		$window.location.href ="#!/adminpage";
		//location.reload();
	};

$scope.deleteAlert = function(message){
		
		$http.delete("rest/alerts/"+message,{},{headers: {'Content-Type': 'application/json'} }).then(function(data){  });
		$window.location.href ="#!/blank";
		$window.location.href ="#!/adminpage";
		//location.reload();
	};

$scope.deleteAlert = function(message){
		
		$http.delete("rest/alerts/"+message,{},{headers: {'Content-Type': 'application/json'} }).then(function(data){  });
		$window.location.href ="#!/blank";
		$window.location.href ="#!/adminpage";
		//location.reload();
	};
	
$scope.pushAlert = function(message){
		
		$http.post("rest/alerts/"+message,{},{headers: {'Content-Type': 'application/json'} }).then(function(data){  });
		$window.location.href ="#!/blank";
		$window.location.href ="#!/adminpage";
		//location.reload();
	};

});

app.controller('indexcontroller', function($scope, $http, $location) {

});
app.controller('dashboardController', function($scope, $http, $location, busses, ampms){

});

app.controller('mapViewController' , function($scope, $http, $location, busses, ampms, $timeout){
	initMap();
  $scope.selectedRoute = "Blue-(Morning)"
  var routeFHPS_AM = [{Time : "7:30 A.M.",Address :  "Ave. C and 61st Street Back side of",Lat  :"33.4984164",Long : "-86.8967907", Stop: "A" },{Time : "7:33 A.M.",Address :  "Avenue C and Jerry D. Coleman",Lat  :"33.4758812",Long : "-86.9173647", Stop: "B" },{Time : "7:35 A.M.",Address :  "61st Street and Myron Massey Blvd.",Lat  :"33.4769925",Long : "-86.9094935", Stop: "C" },{Time : "7:32 A.M.",Address :  "60th Street and Myron Massey Blvd.",Lat  :"33.4771589",Long : "-86.9093703", Stop: "D" },{Time : "7:33 A.M.",Address :  "Myron Massey Blvd. and 55th Place",Lat  :"33.4827151",Long : "-86.9092874", Stop: "E" },{Time : "7:35 A.M.",Address :  "Myron Massey Blvd. and 53rd Place",Lat  :"33.4823689",Long : "-86.9092869", Stop: "F" },{Time : "7:37 A.M.",Address :  "516 54th Street (Middle of the block)",Lat  :"33.4842922",Long : "-86.9128126", Stop: "G" },{Time : "7:41 A.M.",Address :  "54th and Avenue D",Lat  :"33.4825863",Long : "-86.9116957", Stop: "H" },{Time : "7:43 A.M.",Address :  "5174 Hillside Drive",Lat  :"33.4868579",Long : "-86.9139871", Stop: "I" },{Time : "7:44 A.M.",Address :  "721 Court G",Lat  :"33.5299801",Long : "-86.8849877", Stop: "J" },{Time : "7:50 A.M.",Address :  "Glen Oaks Elementary School",Lat  :"33.4912583",Long : "-86.9104421", Stop: "K"}];
  var routeFHPS_PM = [{Time : "3:45 P.M.",Address :  "Glen Oaks Elementary School",Lat  :"33.4912583",Long : "-86.9104421"},{Time : "3:46 P.M.",Address :  "5174 Hillside Drive",Lat  :"33.4868579",Long : "-86.9139871"},{Time : "3:49 P.M.",Address :  "721 Court G",Lat  :"33.5299801",Long : "-86.8849877"},{Time : "3:51 P.M.",Address :  "53rd Street and Court H",Lat  :"33.4804248",Long : "-86.9064393"},{Time : "3:52 P.M.",Address :  "Myron Massey Blvd. and Court H",Lat  :"33.482348",Long : "-86.9071609"},{Time : "3:53 P.M.",Address :  "Myron Massey Blvd. and 53rd Place",Lat  :"33.4823689",Long : "-86.9092869"},{Time : "3:54 P.M.",Address :  "Myron Massey and 55th Place",Lat  :"33.4827151",Long : "-86.9092874"},{Time : "3:57 P.M.",Address :  "516 54th Street (Middle of the block)",Lat  :"33.4842922",Long : "-86.9128126"},{Time : "3:58 P.M.",Address :  "52nd Street and Avenue D",Lat  :"33.485488",Long : "-86.91497"},{Time : "3:59 P.M.",Address :  "54th and Avenue D",Lat  :"33.4825863",Long : "-86.9116957"},{Time : "4:00 P.M.",Address :  "55th and Avenue D",Lat  :"33.482962",Long : "-86.912922"},{Time : "4:04 P.M.",Address :  "56TH Street and Terrace Avenue",Lat  :"33.4822222",Long : "-86.9186264"},{Time : "4:06 P.M.",Address :  "60th Street and Terrace Avenue",Lat  :"33.4773587",Long : "-86.9083505"},{Time : "4:07 P.M.",Address :  "Avenue C and Jerry D. Coleman",Lat  :"33.477358",Long : "-86.9061628"},{Time : "4:08 P.M.",Address :  "Avenue D and Jerry D. Coleman",Lat  :"33.4758712",Long : "-86.9159008"},{Time : "4:09 P.M.",Address :  "Court E and Jerry D. Coleman",Lat  :"33.4758549",Long : "-86.9110933"},{Time : "4:10 P.M.",Address :  "Court F and Jerry D. Coleman",Lat  :"33.4756233",Long : "-86.9099983"},{Time : "4:12 P.M.",Address :  "61st Street and Myron Massey Blvd.",Lat  :"33.476847",Long : "-86.9095797"},{Time : "4:16 P.M.",Address :  "60th Street and Myron Massey Blvd.",Lat  :"33.4771589",Long : "-86.9093703"}];
  var routeGOES_AM = [{Time: "7:21 A.M.", Address:  "Parkridge Ave and Westfield Drive", Lat:  "33.453686", Long: "-86.93382", Stop: "A"},{ Time: "7:22 A.M.", Address:  "929 Westfield Drive", Lat:  "33.4526138", Long: "-86.9353981", Stop: "B"},{ Time: "7:22 A.M.", Address:  "817 Westfield Drive", Lat:  "33.4551111", Long: "-86.9373155", Stop: "C"},{ Time: "7:24 A.M.", Address:  "619 Westfield Drive", Lat:  "33.4577531", Long: "-86.93802", Stop: "D"},{ Time: "7:26 A.M.", Address:  "1000 Hillandale Dr. (Oakland Dr. side)", Lat:  "33.4539601", Long: "-86.9403287", Stop: "E"},{ Time: "7:27 A.M.", Address:  "900 Glen Oaks Drive (Hillandale Dr. Side)", Lat:  "33.4563187", Long: "-86.9411618", Stop: "F"},{ Time: "7:27 A.M.", Address:  "1000 Glen Oaks Drive", Lat:  "33.4557422", Long: "-86.9398591", Stop: "G"},{ Time: "7:28 A.M.", Address:  "800 Glen Crest Dr. (Park Ave. side)", Lat:  "33.455494", Long: "-86.9389742", Stop: "H"},{ Time: "7:29 A.M.", Address:  "846 Park Ave.", Lat:  "33.4542869", Long: "-86.9353883", Stop: "I"},{ Time: "7:30 A.M.", Address:  "824 Fairfax Drive", Lat:  "33.4562005", Long: "-86.9335979", Stop: "J"},{ Time: "7:31 A.M.", Address:  "407 Glen Crest Drive", Lat:  "33.457477", Long: "-86.9330304", Stop: "K"},{ Time: "7:32 A.M.", Address:  "345 Glen Crest Drive", Lat:  "33.4575006", Long: "-86.931328", Stop: "L"},{ Time: "7:33 A.M.", Address:  "Glen Oaks Elementary School", Lat:  "33.4596563", Long: "-86.9301173", Stop: "M"}];
  var routeGOES_PM = [{Time: "4:05 P.M.", Address: "Glen Oaks Elementary School"  ,Lat: "33.4596563",Long: "-86.9301173", Stop: "A"},{ Time: "4:07 P.M.", Address: "Parkridge Ave and Westfield Drive"  ,Lat: "33.453686",Long: "-86.93382", Stop: "B"},{ Time: "4:07 P.M.", Address: "929 Westfield Drive"  ,Lat: "33.4526138",Long: "-86.9353981", Stop: "C"},{ Time: "4:08 P.M.", Address: "817 Westfield Drive"  ,Lat: "33.4551111",Long: "-86.9373155", Stop: "D"},{ Time: "4:09 P.M.", Address: "619 Westfield Drive"  ,Lat: "33.4577531",Long: "-86.93802", Stop: "E"},{ Time: "4:11 P.M.", Address: "1000 Hillandale Dr. (Oakland Dr. side)"  ,Lat: "33.4539601",Long: "-86.9403287", Stop: "F"},{ Time: "4:11 P.M.", Address: "900 Glen Oaks Drive (Hillandale Dr. Side)"  ,Lat: "33.4563187",Long: "-86.9411618", Stop: "G"},{ Time: "4:12 P.M.", Address: "1000 Glen Oaks Drive"  ,Lat: "33.4557422",Long: "-86.9398591", Stop: "H"},{ Time: "4:12 P.M.", Address: "800 Glen Crest Dr. (Park Ave. side)"  ,Lat: "33.455494",Long: "-86.9389742", Stop: "I"},{ Time: "4:13 P.M.", Address: "846 Park Ave."  ,Lat: "33.4542869",Long: "-86.9353883", Stop: "J"},{ Time: "4:14 P.M.", Address: "824 Fairfax Drive"  ,Lat: "33.4562005",Long: "-86.9335979", Stop: "K"},{ Time: "4:15 P.M.", Address: "407 Glen Crest Drive"  ,Lat: "33.457477",Long: "-86.9330304", Stop: "L"},{ Time: "4:16 P.M.", Address: "345 Glen Crest Drive"  ,Lat: "33.4575006",Long: "-86.931328", Stop: "M"}];
  var routeGOESA_AM = [{Time: "6:45 A.M.", Address: "Partridge Ave and Westfield Drive"  ,Lat: "33.4536852",Long: "-86.9335754", Stop: "A"},{Time: "6:46 A.M.", Address: "929 Westfield Drive"  ,Lat: "33.4526183",Long: "-86.9353981", Stop: "B"},{Time: "6:47 A.M.", Address: "817 Westfield Drive"  ,Lat: "33.4551156",Long: "-86.9373155", Stop: "C"},{Time: "6:49 A.M.", Address: "619 Westfield Drive"  ,Lat: "33.4577576",Long: "-86.93802", Stop: "D"},{Time: "6:51 A.M.", Address: "1000 Hillandale Dr. (Oakland Dr. side)"  ,Lat: "33.4539646",Long: "-86.9403287", Stop: "E"},{Time: "6:53 A.M.", Address: "900 Glen Oaks Drive (Hillandale Dr. Side)"  ,Lat: "33.4534189",Long: "-86.9382555", Stop: "F"},{Time: "6:54 A.M.", Address: "1000 Glen Oaks Drive"  ,Lat: "33.4557467",Long: "-86.9398591", Stop: "G"},{Time: "6:55 A.M.", Address: "800 Glen Crest Dr. (Park Ave. si"  ,Lat: "33.4561792",Long: "-86.9366249", Stop: "H"},{Time: "6:56 A.M.", Address: "846 Park Ave."  ,Lat: "33.4542914",Long: "-86.9353883", Stop: "I"},{Time: "6:57 A.M.", Address: "824 Fairfax Drive"  ,Lat: "33.456205",Long: "-86.9335979", Stop: "J"},{Time: "6:58 A.M.", Address: "407 Glen Crest Drive"  ,Lat: "33.4574815",Long: "-86.9330304", Stop: "K"},{Time: "6:59 A.M.", Address: "345 Glen Crest Drive"  ,Lat: "33.4575051",Long: "-86.931328", Stop: "L"},{Time: "7:02 A.M.", Address: "1184 Red Oak Circle"  ,Lat: "33.4630424",Long: "-86.9305844", Stop: "M"},{Time: "7:05 A.M.", Address: "Millstead Road and Post Oak Circ"  ,Lat: "33.4644501",Long: "-86.9335235", Stop: "N"},{Time: "7:06 A.M.", Address: "1101 Cambridge Circle"  ,Lat: "33.4659652",Long: "-86.931916", Stop: "O"},{Time: "7:08 A.M.", Address: "1420 Cambridge Blvd"  ,Lat: "33.4685963",Long: "-86.933187", Stop: "P"},{Time: "7:10 A.M.", Address: "924 Live Oak Circle"  ,Lat: "33.4644457",Long: "-86.9378243", Stop: "Q"},{Time: "7:11 A.M.", Address: "400 Live Oak Circle"  ,Lat: "33.4623402",Long: "-86.9375895", Stop: "R"},{Time: "7:13 A.M.", Address: "1033 Grand oaks Road"  ,Lat: "33.4629035",Long: "-86.9355937", Stop: "S"},{Time: "7:14 A.M.", Address: "1016 Griswold Road (Glenfair Dr."  ,Lat: "33.4617195",Long: "-86.9354763", Stop: "T"},{Time: "7:16 A.M.", Address: "604 Glen Park Drive"  ,Lat: "33.4594241",Long: "-86.9364155", Stop: "U"},{Time: "7:17 A.M.", Address: "644 Glen Park Drive"  ,Lat: "33.4572753",Long: "-86.9362895", Stop: "V"},{Time: "7:19 A.M.", Address: "700 Fairfax Drive"  ,Lat: "33.4595869",Long: "-86.933896", Stop: "W"},{Time: "7:21 A.M.", Address: "Chateau Glen Oaks"  ,Lat: "33.462179",Long: "-86.9319346", Stop: "X"},{Time: "7:27 A.M.", Address: "Glen Oaks Elementary School"  ,Lat: "33.4596563",Long: "-86.9301173", Stop: "Y"}]; 
  var routeGOESA_PM = [{Time: "2:52 P.M.", Address: "Glen Oaks Elementary School" ,Lat: "33.4596563",Long: "-86.9301173", Stop: "A"},{Time: "2:53 P.M.", Address: "Chateau Glen Oaks" ,Lat: "33.462179",Long: "-86.9319346", Stop: "B"},{Time: "2:55 P.M.", Address: "700 Fairfax Drive" ,Lat: "33.4595869",Long: "-86.933896", Stop: "C"},{Time: "2:58 P.M.", Address: "929 Westfield Drive" ,Lat: "33.4526183",Long: "-86.9353981", Stop: "D"},{Time: "3:00 P.M.", Address: "817 Westfield Drive" ,Lat: "33.4551156",Long: "-86.9373155", Stop: "E"},{Time: "3:03 P.M.", Address: "619 Westfield Drive" ,Lat: "33.4577576",Long: "-86.93802", Stop: "F"},{Time: "3:07 P.M.", Address: "1000 Hillandale Dr. (Oakland Dr. side)" ,Lat: "33.4539646",Long: "-86.9403287", Stop: "G"},{Time: "3:08 P.M.", Address: "900 Glen Oaks Drive (Hillandale Dr. Side)" ,Lat: "33.4534189",Long: "-86.9382555", Stop: "H"},{Time: "3:07 P.M.", Address: "1000 Glen Oaks Drive" ,Lat: "33.4557467",Long: "-86.9398591", Stop: "I"},{Time: "3:08 P.M.", Address: "800 Glen Crest Dr. (Park Ave. si" ,Lat: "33.4561792",Long: "-86.9366249", Stop: "J"},{Time: "3:09 P.M.", Address: "846 Park Ave." ,Lat: "33.4542914",Long: "-86.9353883", Stop: "K"},{Time: "3:11 P.M.", Address: "824 Fairfax Drive" ,Lat: "33.456205",Long: "-86.9335979", Stop: "L"},{Time: "3:12 P.M.", Address: "407 Glen Crest Drive" ,Lat: "33.4574815",Long: "-86.9330304", Stop: "M"},{Time: "3:13 P.M.", Address: "345 Glen Crest Drive" ,Lat: "33.4575051",Long: "-86.931328", Stop: "N"},{Time: "3:16 P.M.", Address: "1184 Red Oak Circle" ,Lat: "33.4630424",Long: "-86.9305844", Stop: "O"},{Time: "3:17 P.M.", Address: "Millstead Road and Post Oak Circ" ,Lat: "33.4644501",Long: "-86.9335235", Stop: "P"},{Time: "3:19 P.M.", Address: "1101 Cambridge Circle" ,Lat: "33.4659652",Long: "-86.931916", Stop: "Q"},{Time: "3:20 P.M.", Address: "1420 Cambridge Blvd" ,Lat: "33.4685963",Long: "-86.933187", Stop: "R"},{Time: "3:23 P.M.", Address: "924 Live Oak Circle" ,Lat: "33.4644457",Long: "-86.9378243", Stop: "S"},{Time: "3:24 P.M.", Address: "400 Live Oak Circle" ,Lat: "33.4623402",Long: "-86.9375895", Stop: "T"},{Time: "3:25 P.M.", Address: "1033 Grand oaks Road" ,Lat: "33.4629035",Long: "-86.9355937", Stop: "U"},{Time: "3:26 P.M.", Address: "1016 Griswold Road (Glenfair Dr." ,Lat: "33.4617195",Long: "-86.9354763", Stop: "V"},{Time: "3:29 P.M.", Address: "604 Glen Park Drive" ,Lat: "33.4594241",Long: "-86.9364155", Stop: "W"},{Time: "3:30 P.M.", Address: "644 Glen Park Drive" ,Lat: "33.4572753",Long: "-86.9362895", Stop: "X"}];

  $scope.routes = routeFHPS_AM;

    $scope.alertExist = false;
  $scope.listAlerts = [];
  
  $http.get("rest/alerts",{},{headers: {'Content-Type': 'application/json'} }).then(function(data){
    if(data.data.length>0)
      {
      $scope.listAlerts=data.data;
      $scope.alertExist=true;
      
      }
    
       });

  let data = [{"CODE":"FHPS",  "BUS":"14-05"  ,"DRIVER":"TBD",  "ROUTE":"6 (B)",  "AMPM":"AM",  "TIME":"7:35",  "LOCATION":"Myron Massey Blvd. and 53rd Place",  "LATLONG": "33.4823689,-86.9092869"},
        {"CODE":"FHPS",  "BUS":"14-05"  ,"DRIVER":"TBD",  "ROUTE":"6 (B)",  "AMPM":"PM",  "TIME":"7:35",  "LOCATION":"ABC Massey Blvd. and 53rd Place",  "LATLONG": "33.4823689,-86.9092869"}];
  

  // $scope.listBusses = [
  // { id: 'BOE', name: 'Yellow'},
  // { id: 'DE9', name: 'Green'},
  // { id: 'GOES', name: 'Orange'},
  // { id: 'RES', name: 'Pink'},
  // { id: 'FHPS', name: 'Blue'}
  // ];

  $scope.listBusses = [
	{ id: 'BOE', name: 'Yellow-(Morning)', AMPM: 'AM'},
	{ id: 'DE9', name: 'Green-(Morning)', AMPM: 'AM'},
	{ id: 'GOES', name: 'Orange-(Morning)', AMPM: 'AM'},
	{ id: 'RES', name: 'Pink-(Morning)', AMPM: 'AM'},
	{ id: 'FHPS', name: 'Blue-(Morning)', AMPM: 'AM'},
	{ id: 'BOE', name: 'Yellow-(Evening)', AMPM: 'PM'},
	{ id: 'DE9', name: 'Green-(Evening)', AMPM: 'PM'},
	{ id: 'GOES', name: 'Orange-(Evening)', AMPM: 'PM'},
	{ id: 'RES', name: 'Pink-(Evening)', AMPM: 'PM'},
	{ id: 'FHPS', name: 'Blue-(Evening)', AMPM: 'PM'}
	];

  $scope.ampm = [
  { id: '0', name: 'AM'},
  { id: '1', name: 'PM'}
  ];

   

$scope.update = function(item) {
   let refinedData = [];

        for (let j =0; j<data.length-1;j++) {

          if(data[j].AMPM === item.name){
            refinedData.push(data[j]);
          }};


  } 

 $scope.callinitMap = function(item){
   let selectedBus = item;

   $scope.selectedRoute = selectedBus.name;
    if(selectedBus.id === "BOE"){
    if(selectedBus.AMPM === "AM")
       $scope.routes = routeBOE_AM;
      else
        $scope.routes = routeBOE_PM;

  } else if(selectedBus.id === "DE9"){
    if(selectedBus.AMPM === "AM")
       $scope.routes = routeDE9_AM;
      else
        $scope.routes = routeDE9_PM;
  } else if(selectedBus.id === "GOES"){
    if(selectedBus.AMPM === "AM")
       $scope.routes = routeGOES_AM;
      else
        $scope.routes = routeGOES_PM;

  }else if(selectedBus.id === "RES"){
      if(selectedBus.AMPM === "AM")
       $scope.routes = routeRES_AM;
      else
        $scope.routes = routeRES_PM;

  }else if(selectedBus.id === "FHES"){
    if(selectedBus.AMPM === "AM")
       $scope.routes = routeFHES_AM;
      else
        $scope.routes = routeFHES_PM;
  }
	initMap(item);
 } 







  function setAmpm(ampm){
        ampms.setAmpm(ampm);
    }

  function setBus(bus){
    busses.setBus(bus);
  };

  function getAlerts(){
    $scope.listAlerts = [];
  }


$scope.alertExist = false;
$scope.listAlerts = [];
$scope.doFade=false;
$scope.doshow=true;

$http.get("rest/alerts",{},{headers: {'Content-Type': 'application/json'} }).then(function(data){
if(data.data.length>0)
{
$scope.listAlerts=data.data;
$scope.alertExist=true;

}

  });

$timeout(function(){
     $scope.doFade = true;
   }, 8500);

$timeout(function(){
     $scope.doshow = false;
   }, 9000);

});


app.controller('logoutController', function($scope, $http, $location,$window, $cookies, $cookieStore){
	$cookieStore.put('userlogged',false);
	
});

app.controller('loginController', function($scope, $http, $location,$window, $cookies, $cookieStore){
	
			

	$scope.adminuser="admin";
	$scope.password="password";
	$scope.adminLogged=false;
	if($cookieStore.get('userlogged'))
	{	$scope.adminLogged=true;
		$window.location.href ="#!/adminpage";
	}
	$scope.login = function(username,password){

		if(username==$scope.adminuser && password==$scope.password)
		{ 
			$scope.adminLogged=true;
			$cookieStore.put('userlogged',true);
			$window.location.href ="#!/adminpage";
		}
	};

});  


