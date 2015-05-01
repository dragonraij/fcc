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
var word=arr[0];
var letters = arr[1];

//loop through each of the lettes to find if they are
// found in the word
for(var j =0; j<letters.length; j++){
	if(!contains(word, letters.charAt(j))){
		alert(false);
	}
}

alert(true);
// find whether letter is in word, return true if found
function contains(word, letter){
	flag = false;
	for(var i =0; i<word.length; i++){
		if(word.charAt(i)==letter){
			flag = true;
		}
	}
	return flag;
}
}


function Solution14(){
	
var arr =[7, 'ate', '', false, 9] ;
//used as callback function for filter.
//just returns the value, falsey values get filtered out
function truey(value){
	return value;
}

arr= arr.filter(truey);
alert(arr);
}

//Where art thou
function Solution15(){
var collection =[{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }];
var source = { last: 'Capulet' };	
var arr =[] ;
var sourceProp= Object.getOwnPropertyNames(source);
var temp = source.last;
for(var i=0; i<collection.length; i++){
	if(source[sourceProp]== collection[i][sourceProp[0]]){
		arr.push(collection[i]);
	}
console.log(arr);
}
alert(arr);
}


//Seek and Destroy
function Solution16(){
//to test method using, array and two other arguments
testFun([1, 2, 3, 1, 2, 3], 2, 3)
function testFun(arr){
//first argument is array, go through the rest of arguments and use it to filter array
for(var i=1;i<arguments.length;i++){
	//current variable used to filter array.
	//items that match tocheck are removed
	var toCheck = arguments[i];
	arr= arr.filter(
		function(value){
			return (value!=toCheck);
		}
	);
	}
alert("Final array is " +arr);
}
}

//Where do I belong
function Solution17(){
//first argument is array of sorted values, second value used is whose position being looked up
testFun([40, 60], 50)
function testFun(arr, num){
var testArray=arguments[0];
for(var i=0;i<testArray.length;i++){
	if(testArray[i]>=num){alert("Position of number is  " +i);return;}
}
alert("Position of number is  " +testArray.length);

}
}

// Sum a range
function Solution18(){

sumAll([1, 4]);

function sumAll(arr) {
  
var min = Math.min.apply(null, arr);
var max = Math.max.apply(null, arr);
var sum = 0;

for (var i = min; i<=max; i++){
	sum +=i;
}
	alert("Sum of the range is "+sum);
  return sum;
}
}

