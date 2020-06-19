// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name= name.toLocaleUpperCase(); 
console.log(name);
// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var arr=sentence.split(" ");
let neweArr=[];
var showArr="";
for (var i=0; i<arr.length;i++) {
	if (arr[i]!="") {	 
		showArr+=arr[i][0].toUpperCase()+arr[i].substr(1)+" ";
		}
		}
		showArr=showArr.substring(0,showArr.length-1)
		console.log(showArr);
		

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.substr(1));
//TODO write your code here...
