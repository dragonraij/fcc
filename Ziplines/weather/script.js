$(document).ready(function (){
    
            
            $.get("http://ipinfo.io", function(response) {
    		console.log(response.ip, response.country, response.city);
			document.getElementById("weather").innerHTML=response.city;
			}, "jsonp");
      

    
    
});



