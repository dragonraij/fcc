
// variables declared

var timerOn=false; //indictes whether the timer is active
var counter; // variable for setinterval and clearinterval
var myElement =0;

//for user selected durations
var pomoTime=25;
var breakTime = 5;
//variables used to display current countdown time stored as milliseconds for
//the date function
var pomomSeconds = 0;
var breakmSeconds =0;

//Variables used to format the current time and extract minutes and seconds
var date = new Date();
var mm=0, ss=0;





//These four functions increment and decrement the pomodoro and
// the break duration
function PomoPlus() {
    if (pomoTime<1000) {
        pomoTime++;
        document.getElementById("title").innerHTML="Session";
        document.getElementById("Pomotime").innerHTML = pomoTime;
        document.getElementById("time").innerHTML = pomoTime+":00";        
    }

}

function PomoMinus() {
    if (pomoTime>0) {
        pomoTime--;
        document.getElementById("title").innerHTML="Session";
        document.getElementById("Pomotime").innerHTML = pomoTime;
        document.getElementById("time").innerHTML = pomoTime+":00";  
        
    }
    
}

function BreakPlus() {
    if (breakTime<100) {
        breakTime++;
        document.getElementById("break").innerHTML = breakTime;
            
    }
    
}

function BreakMinus() {
    if (breakTime>0) {
        breakTime--;
        document.getElementById("break").innerHTML = breakTime;
        
    }
}


//Toggle timer function toggles between active and inactive states
function ToggleTimer(){
    if (timerOn) {
        TurnOff();
       
    }else {
       TurnOn();
    }
   
}


function TurnOn(){
     timerOn=true;
        $("#tomato").removeClass("greenBackground");
        $("#tomato").addClass("redBackground");
        $('button').prop('disabled', true);
        pomomSeconds=pomoTime*60*1000; //convert time input to ms
        breakmSeconds = breakTime *60*1000;
        counter = window.setInterval(Countdown, 1000);
}


function TurnOff(){
    timerOn=false;
        $("#tomato").removeClass("redBackground");
        $("#tomato").addClass("greenBackground");
        $('button').prop('disabled', false);
        clearInterval(counter);
}



//updates the countdown timer, is called every second using setInterval
function Countdown(){
    
    if (pomomSeconds>=0) {
        DisplayTime(pomomSeconds, pomomSeconds)
        pomomSeconds-=1000; //decrease time by 1000ms = 1 second
    } 
    else if (breakmSeconds>=0) {
        DisplayTime(breakmSeconds, pomomSeconds)
        breakmSeconds-=1000; //decrease time by 1000ms = 1 second
    
    //When timer ends stop counting and toggle switch
    }else {
        TurnOff();
    }
    
   // document.getElementById("time").innerHTML = --pomoTime;
    //var d = new Date();
    // document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

function DisplayTime(seconds, pomo){
    
    date = new Date(seconds);
    mm = date.getUTCMinutes();
    ss = date.getSeconds();
    if (mm < 10) {mm = "0"+mm;}
    if (ss < 10) {ss = "0"+ss;}
    // This formats time to MM:SS
    document.getElementById("time").innerHTML = mm+":"+ss;
    myElement = document.querySelector("#tomato");
    if (pomo>0) {
        document.getElementById("title").innerHTML="Session";
        myElement.style.background= "linear-gradient(to top, #F00 "+(pomoTime-(seconds/1000/60))/pomoTime*100+"%, #242 , #242)";
        
    }else{
            document.getElementById("title").innerHTML="Break !!";
            myElement.style.background= "linear-gradient(to top, #0F0 "+(breakTime-(seconds/1000/60))/breakTime*100+"%, #242 , #242)";

    }
}