// 21/2/14


function Solution2(){
	
	var total=0;
	var previous=1;
	var current=2;
	var sum = 0;
	while (current <4000000){
		if(current%2===0){
			total=total+current;
		}
		sum=previous+current;
		previous=current;
		current=sum;
	}
	document.getElementById("solution2").innerHTML="Sum of even Fibonacci = "+total;
}

function Solution1(){
	var str = prompt("Please enter a sentence", "The quick brown fox jumped over the lazy dog");

  return str.length;

	document.getElementById("solution1").innerHTML="Sum of multiples = "+total;
}