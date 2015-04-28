// 21/2/14



function Solution5(){
	var str = prompt("Please enter a sentence", "The quick brown fox jumped over the lazy dog");
	var num = 0;
	var strArray = str.split(" ");
	for (pos in strArray){
		if(strArray[pos].length>num){
			num=strArray[pos].length;
		}
	}
  alert("The longest word is "+num+" characters long");
	
}


function Solution6(){
	
var str = prompt("Please enter a sentence", "I'm a little tea pot");
	var titleCase = "";
	var strArray = str.split(" ");
	for (pos in strArray){
		if(pos>0){
			titleCase+=" ";
		}
		titleCase=titleCase+strArray[pos][0].toUpperCase()+strArray[pos].substring(1).toLowerCase();
	}
  alert(titleCase);
	}

function Solution7(){
	
var arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
var largest=0;
for (var i = 0; i < 4; i++) {
	for (var j=0; j <4; j++){
		if(arr[i][j]>largest)
			largest=arr[i][j];
	};
	arr[i]=largest;
	largest=0;
};
  alert(arr);
}


function Solution8(){
	
var str = 'Bastian';
var target =  'n';
//string lenghts
var strLen= str.length;
var targetLen = target.length;
//compare str substring with target and return boolean result
var arr = (str.substring(strLen-targetLen)==target);
  alert(arr);
}


function Solution9(){
	
var str = 'abc';
var num =  3;
var finalstr = "";
//if num is zero or less the string does not repeat
//otherwise repeat n number of times
if(num<=0){
	return finalstr;
}
else{
	for (var i = 0; i <= num; i++) {
		finalstr += str; 	
	};
}
  alert(finalstr);
}

function Solution10(){
	
var str = 'A-tisket a-tasket A green and yellow basket';
var num =  11;
//use slice to shorten the string to length num
if(str.length>0){
var finalstr = str.slice(0,num-3)+"...";
  alert(finalstr);
}
else return str;
}

function Solution11(){
	
var arr =['a', 'b', 'c', 'd'] ;
var size = 2;
arrLength = arr.length;
var result= [];
var temp = [];
// loop through array creating temp arrays of size length
// and put into result array
while(arr.length){
	result.push(arr.splice(0,size));
}
alert(result);



}

function Solution12(){
	
var arr =[1, 2, 3] ;
var howMany = 2;

arr.splice(0,howMany);
alert(arr);
}

function Solution13(){
	
var arr =['hello', 'hey'] ;

}