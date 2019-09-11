function initMap(selectedBus) {
  var routeFHPS_AM = [{"Time" : "7:30 A.M.","Address" :  "Ave. C and 61st Street Back side of","Lat"  :"33.4984164","Long" : "-86.8967907"},{"Time" : "7:33 A.M.","Address" :  "Avenue C and Jerry D. Coleman","Lat"  :"33.4758812","Long" : "-86.9173647"},{"Time" : "7:35 A.M.","Address" :  "61st Street and Myron Massey Blvd.","Lat"  :"33.4769925","Long" : "-86.9094935"},{"Time" : "7:32 A.M.","Address" :  "60th Street and Myron Massey Blvd.","Lat"  :"33.4771589","Long" : "-86.9093703"},{"Time" : "7:33 A.M.","Address" :  "Myron Massey Blvd. and 55th Place","Lat"  :"33.4827151","Long" : "-86.9092874"},{"Time" : "7:35 A.M.","Address" :  "Myron Massey Blvd. and 53rd Place","Lat"  :"33.4823689","Long" : "-86.9092869"},{"Time" : "7:37 A.M.","Address" :  "516 54th Street (Middle of the block)","Lat"  :"33.4842922","Long" : "-86.9128126"},{"Time" : "7:41 A.M.","Address" :  "54th and Avenue D","Lat"  :"33.4825863","Long" : "-86.9116957"},{"Time" : "7:43 A.M.","Address" :  "5174 Hillside Drive","Lat"  :"33.4868579","Long" : "-86.9139871"},{"Time" : "7:44 A.M.","Address" :  "721 Court G","Lat"  :"33.5299801","Long" : "-86.8849877"},{"Time" : "7:50 A.M.","Address" :  "Glen Oaks Elementary School","Lat"  :"33.4912583","Long" : "-86.9104421"}];
  var routeFHPS_PM = [{"Time" : "3:45 P.M.","Address" :  "Glen Oaks Elementary School","Lat"  :"33.4912583","Long" : "-86.9104421"},{"Time" : "3:46 P.M.","Address" :  "5174 Hillside Drive","Lat"  :"33.4868579","Long" : "-86.9139871"},{"Time" : "3:49 P.M.","Address" :  "721 Court G","Lat"  :"33.5299801","Long" : "-86.8849877"},{"Time" : "3:51 P.M.","Address" :  "53rd Street and Court H","Lat"  :"33.4804248","Long" : "-86.9064393"},{"Time" : "3:52 P.M.","Address" :  "Myron Massey Blvd. and Court H","Lat"  :"33.482348","Long" : "-86.9071609"},{"Time" : "3:53 P.M.","Address" :  "Myron Massey Blvd. and 53rd Place","Lat"  :"33.4823689","Long" : "-86.9092869"},{"Time" : "3:54 P.M.","Address" :  "Myron Massey and 55th Place","Lat"  :"33.4827151","Long" : "-86.9092874"},{"Time" : "3:57 P.M.","Address" :  "516 54th Street (Middle of the block)","Lat"  :"33.4842922","Long" : "-86.9128126"},{"Time" : "3:58 P.M.","Address" :  "52nd Street and Avenue D","Lat"  :"33.485488","Long" : "-86.91497"},{"Time" : "3:59 P.M.","Address" :  "54th and Avenue D","Lat"  :"33.4825863","Long" : "-86.9116957"},{"Time" : "4:00 P.M.","Address" :  "55th and Avenue D","Lat"  :"33.482962","Long" : "-86.912922"},{"Time" : "4:04 P.M.","Address" :  "56TH Street and Terrace Avenue","Lat"  :"33.4822222","Long" : "-86.9186264"},{"Time" : "4:06 P.M.","Address" :  "60th Street and Terrace Avenue","Lat"  :"33.4773587","Long" : "-86.9083505"},{"Time" : "4:07 P.M.","Address" :  "Avenue C and Jerry D. Coleman","Lat"  :"33.477358","Long" : "-86.9061628"},{"Time" : "4:08 P.M.","Address" :  "Avenue D and Jerry D. Coleman","Lat"  :"33.4758712","Long" : "-86.9159008"},{"Time" : "4:09 P.M.","Address" :  "Court E and Jerry D. Coleman","Lat"  :"33.4758549","Long" : "-86.9110933"},{"Time" : "4:10 P.M.","Address" :  "Court F and Jerry D. Coleman","Lat"  :"33.4756233","Long" : "-86.9099983"},{"Time" : "4:12 P.M.","Address" :  "61st Street and Myron Massey Blvd.","Lat"  :"33.476847","Long" : "-86.9095797"},{"Time" : "4:16 P.M.","Address" :  "60th Street and Myron Massey Blvd.","Lat"  :"33.4771589","Long" : "-86.9093703"}];
  var routeGOES_AM = [{"Time": "7:21 A.M.", "Address":  "Parkridge Ave and Westfield Drive", "Lat":  "33.453686", "Long": "-86.93382"},{ "Time": "7:22 A.M.", "Address":  "929 Westfield Drive", "Lat":  "33.4526138", "Long": "-86.9353981"},{ "Time": "7:22 A.M.", "Address":  "817 Westfield Drive", "Lat":  "33.4551111", "Long": "-86.9373155"},{ "Time": "7:24 A.M.", "Address":  "619 Westfield Drive", "Lat":  "33.4577531", "Long": "-86.93802"},{ "Time": "7:26 A.M.", "Address":  "1000 Hillandale Dr. (Oakland Dr. side)", "Lat":  "33.4539601", "Long": "-86.9403287"},{ "Time": "7:27 A.M.", "Address":  "900 Glen Oaks Drive (Hillandale Dr. Side)", "Lat":  "33.4563187", "Long": "-86.9411618"},{ "Time": "7:27 A.M.", "Address":  "1000 Glen Oaks Drive", "Lat":  "33.4557422", "Long": "-86.9398591"},{ "Time": "7:28 A.M.", "Address":  "800 Glen Crest Dr. (Park Ave. side)", "Lat":  "33.455494", "Long": "-86.9389742"},{ "Time": "7:29 A.M.", "Address":  "846 Park Ave.", "Lat":  "33.4542869", "Long": "-86.9353883"},{ "Time": "7:30 A.M.", "Address":  "824 Fairfax Drive", "Lat":  "33.4562005", "Long": "-86.9335979"},{ "Time": "7:31 A.M.", "Address":  "407 Glen Crest Drive", "Lat":  "33.457477", "Long": "-86.9330304"},{ "Time": "7:32 A.M.", "Address":  "345 Glen Crest Drive", "Lat":  "33.4575006", "Long": "-86.931328"},{ "Time": "7:33 A.M.", "Address":  "Glen Oaks Elementary School", "Lat":  "33.4596563", "Long": "-86.9301173"}]; 
  var routeGOES_PM = [{"Time": "4:05 P.M.", "Address": "Glen Oaks Elementary School"  ,"Lat": "33.4596563","Long": "-86.9301173"},{ "Time": "4:07 P.M.", "Address": "Parkridge Ave and Westfield Drive"  ,"Lat": "33.453686","Long": "-86.93382"},{ "Time": "4:07 P.M.", "Address": "929 Westfield Drive"  ,"Lat": "33.4526138","Long": "-86.9353981"},{ "Time": "4:08 P.M.", "Address": "817 Westfield Drive"  ,"Lat": "33.4551111","Long": "-86.9373155"},{ "Time": "4:09 P.M.", "Address": "619 Westfield Drive"  ,"Lat": "33.4577531","Long": "-86.93802"},{ "Time": "4:11 P.M.", "Address": "1000 Hillandale Dr. (Oakland Dr. side)"  ,"Lat": "33.4539601","Long": "-86.9403287"},{ "Time": "4:11 P.M.", "Address": "900 Glen Oaks Drive (Hillandale Dr. Side)"  ,"Lat": "33.4563187","Long": "-86.9411618"},{ "Time": "4:12 P.M.", "Address": "1000 Glen Oaks Drive"  ,"Lat": "33.4557422","Long": "-86.9398591"},{ "Time": "4:12 P.M.", "Address": "800 Glen Crest Dr. (Park Ave. side)"  ,"Lat": "33.455494","Long": "-86.9389742"},{ "Time": "4:13 P.M.", "Address": "846 Park Ave."  ,"Lat": "33.4542869","Long": "-86.9353883"},{ "Time": "4:14 P.M.", "Address": "824 Fairfax Drive"  ,"Lat": "33.4562005","Long": "-86.9335979"},{ "Time": "4:15 P.M.", "Address": "407 Glen Crest Drive"  ,"Lat": "33.457477","Long": "-86.9330304"},{ "Time": "4:16 P.M.", "Address": "345 Glen Crest Drive"  ,"Lat": "33.4575006","Long": "-86.931328"}];
  

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

app.controller('mapViewController' , function($scope, $http, $location, busses, ampms){
	initMap();
  var routeFHPS_AM = [{Time : "7:30 A.M.",Address :  "Ave. C and 61st Street Back side of",Lat  :"33.4984164",Long : "-86.8967907", Stop: "A" },{Time : "7:33 A.M.",Address :  "Avenue C and Jerry D. Coleman",Lat  :"33.4758812",Long : "-86.9173647", Stop: "B" },{Time : "7:35 A.M.",Address :  "61st Street and Myron Massey Blvd.",Lat  :"33.4769925",Long : "-86.9094935", Stop: "C" },{Time : "7:32 A.M.",Address :  "60th Street and Myron Massey Blvd.",Lat  :"33.4771589",Long : "-86.9093703", Stop: "D" },{Time : "7:33 A.M.",Address :  "Myron Massey Blvd. and 55th Place",Lat  :"33.4827151",Long : "-86.9092874", Stop: "E" },{Time : "7:35 A.M.",Address :  "Myron Massey Blvd. and 53rd Place",Lat  :"33.4823689",Long : "-86.9092869", Stop: "F" },{Time : "7:37 A.M.",Address :  "516 54th Street (Middle of the block)",Lat  :"33.4842922",Long : "-86.9128126", Stop: "G" },{Time : "7:41 A.M.",Address :  "54th and Avenue D",Lat  :"33.4825863",Long : "-86.9116957", Stop: "H" },{Time : "7:43 A.M.",Address :  "5174 Hillside Drive",Lat  :"33.4868579",Long : "-86.9139871", Stop: "I" },{Time : "7:44 A.M.",Address :  "721 Court G",Lat  :"33.5299801",Long : "-86.8849877", Stop: "J" },{Time : "7:50 A.M.",Address :  "Glen Oaks Elementary School",Lat  :"33.4912583",Long : "-86.9104421", Stop: "K"}];
  var routeFHPS_PM = [{Time : "3:45 P.M.",Address :  "Glen Oaks Elementary School",Lat  :"33.4912583",Long : "-86.9104421"},{Time : "3:46 P.M.",Address :  "5174 Hillside Drive",Lat  :"33.4868579",Long : "-86.9139871"},{Time : "3:49 P.M.",Address :  "721 Court G",Lat  :"33.5299801",Long : "-86.8849877"},{Time : "3:51 P.M.",Address :  "53rd Street and Court H",Lat  :"33.4804248",Long : "-86.9064393"},{Time : "3:52 P.M.",Address :  "Myron Massey Blvd. and Court H",Lat  :"33.482348",Long : "-86.9071609"},{Time : "3:53 P.M.",Address :  "Myron Massey Blvd. and 53rd Place",Lat  :"33.4823689",Long : "-86.9092869"},{Time : "3:54 P.M.",Address :  "Myron Massey and 55th Place",Lat  :"33.4827151",Long : "-86.9092874"},{Time : "3:57 P.M.",Address :  "516 54th Street (Middle of the block)",Lat  :"33.4842922",Long : "-86.9128126"},{Time : "3:58 P.M.",Address :  "52nd Street and Avenue D",Lat  :"33.485488",Long : "-86.91497"},{Time : "3:59 P.M.",Address :  "54th and Avenue D",Lat  :"33.4825863",Long : "-86.9116957"},{Time : "4:00 P.M.",Address :  "55th and Avenue D",Lat  :"33.482962",Long : "-86.912922"},{Time : "4:04 P.M.",Address :  "56TH Street and Terrace Avenue",Lat  :"33.4822222",Long : "-86.9186264"},{Time : "4:06 P.M.",Address :  "60th Street and Terrace Avenue",Lat  :"33.4773587",Long : "-86.9083505"},{Time : "4:07 P.M.",Address :  "Avenue C and Jerry D. Coleman",Lat  :"33.477358",Long : "-86.9061628"},{Time : "4:08 P.M.",Address :  "Avenue D and Jerry D. Coleman",Lat  :"33.4758712",Long : "-86.9159008"},{Time : "4:09 P.M.",Address :  "Court E and Jerry D. Coleman",Lat  :"33.4758549",Long : "-86.9110933"},{Time : "4:10 P.M.",Address :  "Court F and Jerry D. Coleman",Lat  :"33.4756233",Long : "-86.9099983"},{Time : "4:12 P.M.",Address :  "61st Street and Myron Massey Blvd.",Lat  :"33.476847",Long : "-86.9095797"},{Time : "4:16 P.M.",Address :  "60th Street and Myron Massey Blvd.",Lat  :"33.4771589",Long : "-86.9093703"}];
  var routeGOES_AM = [{Time: "7:21 A.M.", Address:  "Parkridge Ave and Westfield Drive", Lat:  "33.453686", Long: "-86.93382", Stop: "A"},{ Time: "7:22 A.M.", Address:  "929 Westfield Drive", Lat:  "33.4526138", Long: "-86.9353981", Stop: "B"},{ Time: "7:22 A.M.", Address:  "817 Westfield Drive", Lat:  "33.4551111", Long: "-86.9373155", Stop: "C"},{ Time: "7:24 A.M.", Address:  "619 Westfield Drive", Lat:  "33.4577531", Long: "-86.93802", Stop: "D"},{ Time: "7:26 A.M.", Address:  "1000 Hillandale Dr. (Oakland Dr. side)", Lat:  "33.4539601", Long: "-86.9403287", Stop: "E"},{ Time: "7:27 A.M.", Address:  "900 Glen Oaks Drive (Hillandale Dr. Side)", Lat:  "33.4563187", Long: "-86.9411618", Stop: "F"},{ Time: "7:27 A.M.", Address:  "1000 Glen Oaks Drive", Lat:  "33.4557422", Long: "-86.9398591", Stop: "G"},{ Time: "7:28 A.M.", Address:  "800 Glen Crest Dr. (Park Ave. side)", Lat:  "33.455494", Long: "-86.9389742", Stop: "H"},{ Time: "7:29 A.M.", Address:  "846 Park Ave.", Lat:  "33.4542869", Long: "-86.9353883", Stop: "I"},{ Time: "7:30 A.M.", Address:  "824 Fairfax Drive", Lat:  "33.4562005", Long: "-86.9335979", Stop: "J"},{ Time: "7:31 A.M.", Address:  "407 Glen Crest Drive", Lat:  "33.457477", Long: "-86.9330304", Stop: "K"},{ Time: "7:32 A.M.", Address:  "345 Glen Crest Drive", Lat:  "33.4575006", Long: "-86.931328", Stop: "L"},{ Time: "7:33 A.M.", Address:  "Glen Oaks Elementary School", Lat:  "33.4596563", Long: "-86.9301173", Stop: "M"}];
  var routeGOES_PM = [{Time: "4:05 P.M.", Address: "Glen Oaks Elementary School"  ,Lat: "33.4596563",Long: "-86.9301173", Stop: "A"},{ Time: "4:07 P.M.", Address: "Parkridge Ave and Westfield Drive"  ,Lat: "33.453686",Long: "-86.93382", Stop: "B"},{ Time: "4:07 P.M.", Address: "929 Westfield Drive"  ,Lat: "33.4526138",Long: "-86.9353981", Stop: "C"},{ Time: "4:08 P.M.", Address: "817 Westfield Drive"  ,Lat: "33.4551111",Long: "-86.9373155", Stop: "D"},{ Time: "4:09 P.M.", Address: "619 Westfield Drive"  ,Lat: "33.4577531",Long: "-86.93802", Stop: "E"},{ Time: "4:11 P.M.", Address: "1000 Hillandale Dr. (Oakland Dr. side)"  ,Lat: "33.4539601",Long: "-86.9403287", Stop: "F"},{ Time: "4:11 P.M.", Address: "900 Glen Oaks Drive (Hillandale Dr. Side)"  ,Lat: "33.4563187",Long: "-86.9411618", Stop: "G"},{ Time: "4:12 P.M.", Address: "1000 Glen Oaks Drive"  ,Lat: "33.4557422",Long: "-86.9398591", Stop: "H"},{ Time: "4:12 P.M.", Address: "800 Glen Crest Dr. (Park Ave. side)"  ,Lat: "33.455494",Long: "-86.9389742", Stop: "I"},{ Time: "4:13 P.M.", Address: "846 Park Ave."  ,Lat: "33.4542869",Long: "-86.9353883", Stop: "J"},{ Time: "4:14 P.M.", Address: "824 Fairfax Drive"  ,Lat: "33.4562005",Long: "-86.9335979", Stop: "K"},{ Time: "4:15 P.M.", Address: "407 Glen Crest Drive"  ,Lat: "33.457477",Long: "-86.9330304", Stop: "L"},{ Time: "4:16 P.M.", Address: "345 Glen Crest Drive"  ,Lat: "33.4575006",Long: "-86.931328", Stop: "M"}];



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
   console.log('refinedData: ', refinedData, item);
        for (let j =0; j<data.length-1;j++) {
    console.log('data: ', data[j].AMPM);
          if(data[j].AMPM === item.name){
            refinedData.push(data[j]);
          }};

        console.log('refinedData: ', refinedData);
  } 

 $scope.callinitMap = function(item){
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
		console.log("invoked");
		if(username==$scope.adminuser && password==$scope.password)
		{ 
			$scope.adminLogged=true;
			$cookieStore.put('userlogged',true);
			$window.location.href ="#!/adminpage";
		}
	};

});  


