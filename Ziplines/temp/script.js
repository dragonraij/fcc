var pomo=25;
var timerOn=false;


function PomoPlus() {
    pomo++;
    document.getElementById("Pomotime").innerHTML = pomo;
    document.getElementById("time").innerHTML = pomo;
}

function PomoMinus() {
    pomo--;
    document.getElementById("Pomotime").innerHTML = pomo;
    document.getElementById("time").innerHTML = pomo;
     if (timerOn) {
        timerOn=false;
    }else {
        timerOn=true;
    }
    console.log(timerOn);
    
}

function BreakPlus() {
    pomo++;
    document.getElementById("break").innerHTML = pomo;
     if (timerOn) {
        timerOn=false;
    }else {
        timerOn=true;
    }
    console.log(timerOn);
}

function BreakMinus() {
    pomo--;
    document.getElementById("break").innerHTML = pomo;
}

function ToggleTimer(){
    if (timerOn) {
        timerOn=false;
        $("#tomato").removeClass("redBackground");
        $("#tomato").addClass("greenBackground");
        $('button').prop('disabled', false);
       
    }else {
        timerOn=true;
        $("#tomato").removeClass("greenBackground");
        $("#tomato").addClass("redBackground");
        $('button').prop('disabled', true);
        window.setInterval(Countdown, 1000);
    }
    console.log(timerOn);
}

function Countdown(){
 document.getElementById("time").innerHTML = pomo--;
  //var d = new Date();
 // document.getElementById("time").innerHTML = d.toLocaleTimeString();
}