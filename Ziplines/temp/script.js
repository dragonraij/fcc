
// variables declared

var timerOn=false; //indictes whether the timer is active
var counter; // variable for setinterval and clearinterval

//for user selected durations
var pomoTime=1;
var breakTime = 1;
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
    pomoTime++;
    document.getElementById("Pomotime").innerHTML = pomoTime;
    document.getElementById("time").innerHTML = pomoTime;
}

function PomoMinus() {
    pomoTime--;
    document.getElementById("Pomotime").innerHTML = pomoTime;
    document.getElementById("time").innerHTML = pomoTime;
    
}

function BreakPlus() {
    breakTime++;
    document.getElementById("break").innerHTML = breakTime;
    
}

function BreakMinus() {
    breakTime--;
    document.getElementById("break").innerHTML = breakTime;
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
        counter = window.setInterval(Countdown, 100);
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
        DisplayTime(pomomSeconds)
        pomomSeconds-=1000; //decrease time by 1000ms = 1 second
    } 
    else if (breakmSeconds>=0) {
        DisplayTime(breakmSeconds)
        breakmSeconds-=1000; //decrease time by 1000ms = 1 second
    
    //When timer ends stop counting and toggle switch
    }else {
        TurnOff();
    }
    
   // document.getElementById("time").innerHTML = --pomoTime;
    //var d = new Date();
    // document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

function DisplayTime(seconds){
    
    date = new Date(seconds);
    mm = date.getUTCMinutes();
    ss = date.getSeconds();
    if (mm < 10) {mm = "0"+mm;}
    if (ss < 10) {ss = "0"+ss;}
    // This formats time to MM:SS
    document.getElementById("time").innerHTML = mm+":"+ss;
    
}