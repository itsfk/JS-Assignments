var numOrString =prompt("Enter number or String");
if (numOrString){

}


var a = prompt("Enter Number 1");
var b = prompt("Enter Number 2");
if(a>b){
    alert("The first Number is Larger then Second");
}
else if(a==b){
alert("Both numbers are equal");
}
else{
alert("The second Number is larger then the first");
}

var number = prompt("Enter Number");
if (number < 0) {
  document.write("The entered number is negative");
} else if (number > 0) {
  document.write("The entered number is positive");
} else {
  document.write("The entered number is zero");
}


var letter =prompt("Enter a letter");
if (letter=='a'|'e'|'i'|'o'|'u'){
alert("True");
}
else{
    alert("False");
}


var password ="khan";
var enterPw =prompt("Enter your password");
if(enterPw==""){
alert("Please enter your password");
}
else if(password==enterPw){
alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect Password!");
}


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}

var time =prompt("Enter Time");
if(time>=0000 &&  time<1200){
alert("Good Morning");
}
else if(time>=1200&&time<1700){
alert("Good Afternoon");
}
else if(time>=1700&&time<2100){
    alert("Good Evening");
    }
    else if(time>=2100&&time<2359){
        alert("Good night");
  }