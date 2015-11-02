var cntry =0;


//declare variables
var city="", country ="", temp=0; degrees="celcius";
var weather="";

$( document ).ready(function() {
    console.log( "ready!" );

//get location data    
$.getJSON("http:///www.ipinfo.io/", null, function(response){
    
    //store location data
    city=response.city;
    country=response.country;
    cntry=response;

    //update display
	document.getElementById("city").innerHTML = city+", "+country;
	

	//get weather data
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&units=metric&APPID=aae4a1f36a91da5662b14523e312a089", null,function(json){
		weather=json;
		document.getElementById("weather").innerHTML = json.weather[0].description;	
	    document.getElementById("icon").src="www.xyz.com/"+weather.url+".png";
	    
	});



	});

	


});


function changeTemp(){
    if(degrees="celcius"){
        temp= (temp *  9/5) + 32;
        degrees= "fahrenheit";
    }else{
        
        degrees="celcius";
    }
}

/*$.get

("http://api.openweathermap.org/data/2.5/weather?q=Modesto&APPID=aae4a1f36a91da5662b14523e312a089", function

(response){
    console.log("Jason Data");
    console.log(response); hi=response;
});
});*/