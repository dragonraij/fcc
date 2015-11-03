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
		temp=json.main.temp;
        document.getElementById("weather").innerHTML = json.weather[0].description;
        document.getElementById("temp").innerHTML = temp+"&#x2103;";  //faren 2109	
	    document.getElementById("icon").src="http://openweathermap.org/img/w/"+weather.weather[0].icon+".png";
	    
	});



	});

	


});


function changeTemp(){
    if(degrees=="celcius"){
        temp= (temp *  9/5) + 32;
        degrees= "fahrenheit";
        document.getElementById("temp").innerHTML = temp+"&#x2109;";  //faren 2109
    }else{
        
        degrees="celcius";
        temp=(temp-32)*5/9;
        document.getElementById("temp").innerHTML = temp+"&#x2103;";  //faren 2109
    }
}



function reload(){
    location.reload();
    $(document).ready();
}
/*$.get

("http://api.openweathermap.org/data/2.5/weather?q=Modesto&APPID=aae4a1f36a91da5662b14523e312a089", function

(response){
    console.log("Jason Data");
    console.log(response); hi=response;
});
});*/