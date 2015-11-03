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
        document.getElementById("weather").innerHTML = json.weather[0].description; // verbal description of current weather
        document.getElementById("temp").innerHTML = temp+"&#x2103;";  //get current temperature in celcius
        document.getElementById("icon").src="http://openweathermap.org/img/w/"+weather.weather[0].icon+".png";  //display current weather icon
	    
        //select image id depending on conditions
        
        var imgURL = "";
        switch(weather.weather[0].main) {
    case "Thunderstorm":
        imgURL = "0B2FfVLw7EUDXRTFRelBfcm5OYmM";
        break;
    case "Drizzle":
        imgURL = "0B2FfVLw7EUDXb1dBcVhwSzhwNVk";
        break;
    case "Rain":
        imgURL = "0B2FfVLw7EUDXT24xcTNjX3c4Zkk";
        break;
    case "Snow":
        imgURL = "0B2FfVLw7EUDXR0dZdzVqcEt4NUE";
        break;
    case "Atmosphere":
        imgURL = "0B2FfVLw7EUDXUkx1TzVQTy1hSEU";
        break;
    case "Clear":
        imgURL = "0B2FfVLw7EUDXY3FKcDMxSm40Z2s";
        break;
    case "Clouds":
        imgURL = "0B2FfVLw7EUDXbDllSlc0aVd1b1U";
        break;
    case "Extreme":
        imgURL = "0B2FfVLw7EUDXTzRnX3gxWUlVWFE";
        break;

    default:
        imgURL = "0B2FfVLw7EUDXVl9yTkowS2wxZEk";
}
	
    //Retrieve the image from server using selected id
        document.body.style.background = "url('http://drive.google.com/uc?export=view&id="+imgURL+"') no-repeat center center fixed";
        document.getElementById("mainBody").style.backgroundSize="cover";


    });



	});

	


});


function changeTemp(){
    if(degrees=="celcius"){
        temp= (temp *  9/5) + 32;
        degrees= "fahrenheit";
        temp=+temp.toFixed(2);// round off the number 2 2dp
        document.getElementById("temp").innerHTML = temp+"&#x2109;";  //faren 2109
    }else{
        
        degrees="celcius";
        temp=(temp-32)*5/9;
        temp=+temp.toFixed(2);// round off the number 2 2dp
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