var previous =0;
var current =0;
var operator = null;

function getNumber(a){
    current=a;
    console.log(current);
    document.getElementById("displaytext").innerHTML=current;
    
}

function getOperator(a){
    operator=a;
    previous=current;
}

function getResult(){
    switch (operator) {
        case 'plus':
            previous+=current;
            console.log(previous);   
            break;
        case 'minus':
            previous-=current;
            console.log(previous);   
            break;
        case 'divide':
            previous=previous/current;
            console.log(previous);   
            break;
        case 'multiply':
            previous=previous*current;
            console.log(previous);   
            break;
        case 'divide':
            previous=previous/current;
            console.log(previous);   
            break;
        case 'percent':
            previous=previous/current*100;
            console.log(previous);   
            break;        
        
        default:
            // do nothing
    }
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