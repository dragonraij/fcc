var hi=0;
$( document ).ready(function() {
    console.log( "ready!" );
    
$.getJSON("ipinfo.io/8.8.8.8", function(response){
    console.log("Jason Data");
    console.log(response);
});
});


