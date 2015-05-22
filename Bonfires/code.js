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
//find the larger and smaller number  
var min = Math.min.apply(null, arr);
var max = Math.max.apply(null, arr);
var sum = 0;

//loop through and all all the numbers between the min and max
for (var i = min; i<=max; i++){
	sum +=i;
}
	alert("Sum of the range is "+sum);
  return sum;
}
}


// Diff of array
function Solution19(){

function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  arr2.forEach(compareArr1);
  arr1.forEach(compareArr2);

  function compareArr1(element, index, array){
  	if (-1 === arr1.indexOf(element)) {
    newArr.push(element);
    console.log(newArr);
  }
  }


function compareArr2(element, index, array){
  	if (-1 === arr2.indexOf(element)) {
    newArr.push(element);
    console.log(newArr);
  }
  }

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
}

function Solution20(){
function convert(num) {
 var roman ="";
 var noOfMultiples=0;
 //map of roman numberals
 var numerals = [[1000,"M"],[500,"D"],[100,"C"],[50,"L"], [10,"X"], [5,"V"],[1,"I"]];

//Compare number with roman numerals
for(var i = 0; i<numerals.length; i++){

	makeRoman(numerals[i][0], numerals[i][1]);
}
	console.log(roman);
 return roman;

function makeRoman(divisor,RomNumber){
noOfMultiples = Math.floor(num/divisor);
if(noOfMultiples){
	//if having four consective same numerals use subtractive notation
	if(noOfMultiples==4){
		if(roman.charAt(roman.length-1)==numerals[i-2][1]){
			roman+=RomNumber+numerals[i-1][1];
		}else if(roman.charAt(roman.length-1)==numerals[i-1][1]){
			roman=roman.slice(0,roman.length-1);
			roman+= RomNumber+ numerals[i-2][1];
			
		}else if(roman==""){
			roman+=RomNumber+numerals[i-1][1];
		}
		
	}
	else{
		for(var j=0; j<noOfMultiples; j++){
			roman+=RomNumber;
		}
	}
	num-=(noOfMultiples*divisor);
}

 
}
}
convert(4);
}


// Search and replace
function Solution21(){

function replace(str, before, after) {
 var firstLetter = before.charAt(0);
 if(firstLetter==firstLetter.toUpperCase()){
 	after=after.charAt(0).toUpperCase()+after.slice(1);
 }
 
 return str.replace(before, after);
}

replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

}

// Pig Latin Translator
function Solution22(){
function translate(str) {
	//If the first letter is a vowel add 'way' to the end of string
	if(['a','e','i','o','u'].indexOf(str.charAt(0).toLowerCase())>-1){
		str+='way';
	}
	//Otherwise it is consonant - move initial consonants to the end of the word and add ay
	else{
		//find size of initial consonant group
		var j=0;
		do{
			j++;
		}while(['a','e','i','o','u'].indexOf(str.charAt(j).toLowerCase())==-1);
		//move first consonant group to end of string and add 'ay'
		var firstLetters = str.slice(0,j).toLowerCase();
		str= str.slice(j)+firstLetters+'ay';
	}
	console.log(str);
 return str;
}

translate("glove");
}

// DNA Pairing
//loop through all the provided letters and finds the equivalent pairs
function Solution23(){

function pair(str) {
	var DNApairs = [];
	for (var i=0; i <str.length; i++){
		DNApairs.push(makePairs(str.charAt(i)));
	}
	alert(DNApairs);
 return str;
//Provided with one of the DNA codes, returns the pair as array
 function makePairs(value){
 	switch(value){
 		case 'A': return ['A','T'];
 		case 'T': return ['T','A'];
 		case 'G': return ['G','C'];
 		case 'C': return ['C','G'];
 		default: return [-1,-1];
 	}

 }
}

pair("GCG");
}


// Missing Letters
//loop through all the provided letters and check if next letter is one greater
//than current. if not add missing letter to missingLetters string
//at the end if no missing letters found return undefined else return missingLetters string
function Solution24(){
function fearNotLetter(str) {
	var missingLetters="";
	for(var i=0; i<str.length-1;i++){
		if(str.charCodeAt(i+1)-str.charCodeAt(i)!=1){
			missingLetters+=String.fromCharCode(str.charCodeAt(i)+1);
		}
	}
	console.log(missingLetters);
	if(missingLetters){return missingLetters;}
	else {return undefined}
}

fearNotLetter('abce');
}

// Boo who
//check the type of the parameter, if boolean return true else false
function Solution25(){
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(typeof bool ==="boolean"){
  	return true;
  }
  else {return false};
  
}
	boo(null);
}

// Sorted Union
//returns list of all unique values in parameter arrays
function Solution26(){
function unite(arr1, arr2, arr3) {
  var combinedArray = [];
  var current =[];
  //loop through list of parameters
  for(i=0; i<arguments.length; i++){
  	current=arguments[i];
  	//for each parameter go through array checking if value is in combinedArray
  	//if not found add it to the array
  	for(j=0;j<current.length; j++){
  		if(combinedArray.indexOf(current[j])==-1){
  			combinedArray.push(current[j]);
  		}
  	}
  }

  return combinedArray;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);

}


// Convert HTML Entities
//returns list of all unique values in parameter arrays
function Solution27(){
function convert(str) {
  // &colon;&rpar;
  str =str.replace(/&/g, "&#38" );
  console.log(str);
}

convert('Dolce & Gabbana');
}

// Convert to spinal case
//use REGEX to convert string to spinal case
function Solution28(){
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  	//replace camelCase with spinal
  	str=str.replace(/([a-z])([A-Z])/g, '$1-$2');
  	//replace normal word spacing with spinal
    str =str.replace(/\s/g, "-" );
  	//replace underscores with spinal
  	str =str.replace(/_/g, "-" ).toLowerCase();

  console.log(str);
}

spinalCase('ThisIsSpinalTapTheTeletubbies say Eh-ohThis Is Spinal Tap');
}


// Sum Odd Fibonaci numbers

function Solution29(){
function sumFibs(num) {
	var previous = 0; //previous Fibonachi number
	var Fibonaci =1;// current Fibonanci
	var totalOfOdd = 0; // sum of odd Fibonachi numbers
	var temp = 0;
	do{
		//If current Fibonachi is odd add to total
		if(Fibonaci%2){
			totalOfOdd+=Fibonaci;
		}
		//Add current plus previous Fibonachi
		temp=previous+Fibonaci;
		previous=Fibonaci; // swap number positions
		Fibonaci=temp;
	}while(Fibonaci<=num)
  console.log(totalOfOdd);
  return totalOfOdd;
}

sumFibs(4);
}


// Sum All Primes
//given a number num add all prime numbers up to and including num
function Solution30(){
	function sumPrimes(num) {
  var primesList = [2], total = 2;//initialise to first prime
  if(num<2){return -1}//numbers less than 2 are not prime
  for(var i =3; i<=num; i++){
  	if(isPrime(i)){
  		total+=i;
  		primesList.push(i);

  	}
  }
  console.log(total);
  return total;

//loop through list of known primes to test if number is divisible
//returns boolean true if it is a prime
function isPrime(n){
	var flag = true;
	for(number in primesList){
		if(n%primesList[number]==0){
			flag=false; //if n is divisible by number its not prime
		}
	}	
	
	return flag;
}
}


sumPrimes(10);
}


// Lowest common multiple
//given an array indicating a range find lowest common multiple
function Solution31(){
	function smallestCommons(arr) {
	var max = Math.max.apply(Math, arr);  //maximum number of range
	var min = Math.min.apply(Math, arr);  // minimum number of range
	var multiple = max*(max-1); //the amount by which potential LCM increments
	var LCM = multiple; //potential LCM value
	var LCMFound;
	
	do{
		LCMFound=true// set flag to true
		//check if the LCM is divisible by all the numbers in range
		for(var i=min; i<=max-2; i++){
			if(LCM%i){
				LCM+=multiple;
				LCMFound =false; // if LCM is not divisible it is not a LCM
			}
		}
				
	}while(!LCMFound) // repeat until LCM is found
	
	return LCM;

}


smallestCommons([1,5]);
}

//Finders Keepers
function Solution32(){
function find(arr, func){
	var match;
	arr.some(function(num){ 
	if(num % 2 === 0){
		match=num;
		console.log(match);
		return true;
	}
});
	console.log(match);
	return match;
}

find([1, 2, 3, 4], function(num){ 
	if(num % 2 === 0){
		match=num;
		console.log(match);
		return true;
	}
});

}

//Drop it like its hot
function Solution33(){
function drop(arr, func) {
  // Drop them elements.
  var count=0;
  var length = arr.length;
  
  //loop through the array counting number of items that need to be removed
  //until you get to the first element that passes the truth test
  for(var i =0; i<length; i++){
  	
  	if(func(arr[i])){//test for i
  		break;
  	}
  	else{
  		count++;//increment count
  	}
  }

  //remove count number of elements from the front of the array
  for(var j=0; j<count; j++){
  	arr.shift();
  }
  console.log(arr);
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
}


//Steamroller
//uses recursive function calls to change multi layered array to flat array
function Solution34(){
	function steamroller(arr) {
  // I'm a steamroller, baby
  var flatArray = [];//flattend array goes here

flatten(arr); //calls the flatten method on input array

  function flatten(arr){
  	for(var i =0; i<arr.length; i++){
  		if(Array.isArray(arr[i])){	//if element at position i is an array, call flatten it
  			flatten(arr[i]);
  		}
  		else{
  			flatArray.push(arr[i]);	//otherwise put the value of element i to output array
  		}
  	}

  }
  console.log(flatArray);
  return flatArray;
}

steamroller([1, [2], [3, [[4]]]]);
}


//Binary Agents
function Solution35(){
function binaryAgent(str) {
	var word = ""; // create empty word
	var strArray = str.split(" ");// split str to array of binary numbers
	
	//loop through the numbers in strArray
	for (var i = 0; i < strArray.length; i++) {
		strArray[i]= parseInt(strArray[i], 2); // convert the binary values to base 10
		word = word+String.fromCharCode(strArray[i]); // convert charactercode to string
	};


  return word; //return the converted word
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
}


//Pair Wise
//Find pairs of number in array which add up to arg
function Solution36(){

function pairwise(arr, arg) {
	var indexValues = [];
	var total =0;

	//loop through the array comparing pairs of values
	for (var j = 0; j < arr.length-1; j++) {
		for (var i = j+1; i < arr.length; i++) {

			//if the index value has already been summed, dont sum again
			if(indexValues.indexOf(i)>=0||indexValues.indexOf(j)>=0){
				continue;}
			
			//if current values add up to arg, add them to array
			if(arr[i]+arr[j]==arg){
				indexValues.push(i);
				indexValues.push(j);
				console.log(arr[j]+"+"+arr[i]+"="+arg);
				console.log(indexValues.indexOf(i));
			console.log(indexValues.indexOf(j));
			}
		};
	};	

	//sum up the index values and return
	for (var i = 0; i < indexValues.length; i++) {
		total+=indexValues[i]
	};
	console.log(total);
	return total;
}

pairwise([1,4,2,3,0,5], 7);
}



//Everything be true
//checks if the second argument is found as an element in 
//the first element
function Solution37(){
function every(collection, pre) {
  // Does everyone have one of these?

  //loop through all the objects in the array
  for (var i = 0; i < collection.length; i++) {

  	//check to see if object has property pre and it is defined
  	if(collection[i].hasOwnProperty(pre) && collection[i][pre] ){
  		
  		//property exists and is defined
  		
  	}
  	else {return false;} //otherwise return false
  };
  return true;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
}


//Arguments optional
//Implement a add function. IF two number are given add them together
//If only one argument is provided return a function expecting another number to add
function Solution38(){
function add() {
	var num= arguments[0];// set num as first parameter for easy referance
	
	//If two parameters are passed and both are numbers
	if(arguments.length==2 && parseFloat(num)===num && parseFloat(arguments[1])===arguments[1]){
		return num+arguments[1];
	}

	//Only one parameter given and is a number
	else if(arguments.length==1 && !isNaN(num)){

		//return a function function expects another number to add to n
		// returns sum, if number not found returns undefined
		return function (n){
			if(n===parseFloat(n)){
				console.log(n+num);
				return n+num;
			}else{
				console.log(undefined);
				return undefined;
			}
		};
			
	}

	//If correct parameters not found, return undefined
  		console.log(undefined+"end");
  return undefined;
}

add(2, 3);
}
