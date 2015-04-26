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
