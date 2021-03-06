var previous =0;
var current =0;
var operator = "equals";

function getNumber(a){
    //to allow multi digit numbers to be entered by user
    current=(current*10)+a;
    document.getElementById("displaytext").innerHTML=current;
    
}

function getOperator(a){
    //if no numbers have been input, can change change operator sign
    //allows change more than one time
    if (current==0) {
        operator=a;
    }
    
    //if number has been entered checks what was previous operation if it was
    //equality no need to calculate, assign current input to current
    //otherwise calculate result of current and previous input and display
    else{
    if (operator=="equals") {
        previous=current;
    }else{
        getResult();
            
    }
    
    }
    current=0;
    operator=a;

}

function getResult(){
    switch (operator) {
        case 'plus':
            previous+=current;
            break;
        case 'minus':
            previous-=current;
            break;
        case 'divide':
            previous=previous/current;
            break;
        case 'multiply':
            previous=previous*current;
            break;
        case 'divide':
            previous=previous/current;
            break;
        case 'percent':
            previous=previous/current*100;
            break;        
        
        case 'equals':
            previous=current;
    }
    previous=previous.toFixed(5);
    document.getElementById("displaytext").innerHTML=previous;
    current=0;
    operator="equals";
}

function clearError() {
    current=0;
    document.getElementById("displaytext").innerHTML=current;
}

function allClear(){
    current =0;
    previous=0;
    document.getElementById("displaytext").innerHTML=current;
}