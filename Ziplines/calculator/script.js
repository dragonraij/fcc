var previous =0;
var current =0;
var operator = null;

function getNumber(a){
    current=(current*10)+a;
    console.log(current);
    document.getElementById("displaytext").innerHTML=current;
    
}

function getOperator(a){
    operator=a;
    previous=current;
    current=0;
    console.log(operator);
}

function getResult(){
    switch (operator) {
        case 'plus':
            previous+=current;
            document.getElementById("displaytext").innerHTML=previous;
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
            // code
    }
}