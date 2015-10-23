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
    }else {
        timerOn=true;
    }
    console.log(timerOn);
}