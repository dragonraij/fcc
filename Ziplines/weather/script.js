var cntry =0;
var hi=0;

//declare variables
var city="", country ="";


$( document ).ready(function() {
    console.log( "ready!" );

//get location data    
$.getJSON("http:///www.ipinfo.io/", function(response){
    console.log("Jason Data");
    console.log(response);
    city=response.city;
    country=response.country;
    cntry=response;
});

//get weather data
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Auckland,NZ&APPID=aae4a1f36a91da5662b14523e312a089", function(json){
	console.log("Weather is");
	console.log(json);
	hi=json;

});
});


/*$.get

("http://api.openweathermap.org/data/2.5/weather?q=Modesto&APPID=aae4a1f36a91da5662b14523e312a089", function

(response){
    console.log("Jason Data");
    console.log(response); hi=response;
});
});*/