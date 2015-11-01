<<<<<<< HEAD
$(document).ready(function (){
    
            
            $.get("http://ipinfo.io", function(response) {
    		console.log(response.ip, response.country, response.city);
			document.getElementById("weather").innerHTML=response.city;
			}, "jsonp");
      

    
=======
var hi=0;
$( document ).ready(function() {
    console.log( "ready!" );
>>>>>>> origin/master
    
$.getJSON("ipinfo.io/8.8.8.8", function(response){
    console.log("Jason Data");
    console.log(response);
});
});


