// var city =prompt("Enter City");
// if(city=="karachi"){
// alert("Welcome to city of lights");
// }
// var gender = prompt("Enter your gender");
// if (gender == "male") {
//   alert("Good Morning Sir!");
// } else {
//   alert("Good Morning Ma'am!");
// }
// var input =prompt("Enter the colour of signal");
// if(input=="Red"){
// alert("Must Stop");
// }
// else if(input=="Yellow"){
// alert("Ready to move");
// }
// else if(input=="Green") {
// alert("Move  now");
// }
// var liters=prompt("Enter Litres");
// if(liters<0.25){
// alert("Please refill the fuel in your car");
// }
// var remarks, grade;
var remarks, grade;
// var totalMark = prompt("Enter the total marks obtained");
// var marksObtain = prompt("Enter Marks obtain");
// var percentage = marksObtain / totalMark * 100;
// if (percentage >= 80) {
//   remarks = "Excellent";
//   grade = "A one";
// } else if (percentage >= 70) {
//   remarks = "Good";
//   grade = "A";
// } else if (percentage >= 60) {
//   remarks = "You need to improve";
//   grade = "B";
// } else if (percentage < 60) {
//   remarks = "Soryy";
//   grade = "Fail";
// }
// document.write("Mark Sheet");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("Total Marks : " + totalMark);
// document.write("<br>");
// document.write("Marks Obtained : " + marksObtain);
// document.write("<br>");
// document.write("Percentage : " + percentage+"%");
// document.write("<br>");
// document.write("Remarks : " + remarks);
// document.write("<br>");
// document.write("Grade : " + grade);// var totalMark = prompt("Enter the total marks obtained");
// var marksObtain = prompt("Enter Marks obtain");
// var percentage = marksObtain / totalMark * 100;
// if (percentage >= 80) {
//   remarks = "Excellent";
//   grade = "A one";
// } else if (percentage >= 70) {
//   remarks = "Good";
//   grade = "A";
// } else if (percentage >= 60) {
//   remarks = "You need to improve";
//   grade = "B";
// } else if (percentage < 60) {
//   remarks = "Soryy";
//   grade = "Fail";
// }
// document.write("Mark Sheet");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("Total Marks : " + totalMark);
// document.write("<br>");
// document.write("Marks Obtained : " + marksObtain);
// document.write("<br>");
// document.write("Percentage : " + percentage+"%");
// document.write("<br>");
// document.write("Remarks : " + remarks);
// document.write("<br>");
// document.write("Grade : " + grade);
// var secrentNum="1234";
// var num=prompt("Enter the number");
// var parseNum=parseInt(num);
// if (secrentNum==num){
// alert("Bingo!");
// }
// else if(parseNum+1){
//     alert("Close Enough");
// }
// var num = prompt("Enter Number");
// var div = parseInt(num);
// div=num%3;
// if (div == 0) {
//   alert("Number is completely Divisible");
// } else {
//   alert("Number is not divisble");
// }
// var num =prompt("Enter Number");
// var num1 =parseInt(num);
// if(num1%2==0){
// alert("Number is even");
// }
// else if(num1%2==1){
// alert("Number is odd");
// }
// var temp = prompt("Enter Temperature");
// if (temp > 40) {
//   alert("It is too hot outside");
// } else if (temp > 30) {
//   alert("The weather today is normal");
// } else if (temp > 20) {
//   alert("Today's weather is cool");
// } else if (temp > 20) {
//   alert("OMG! Today weather is so cool");
// }

/* var a = prompt("Enter Number 1");
var b = prompt("Enter Number 2");
var c = prompt("Enter the operation to perform");
var number1 = parseInt(a);
var number2 = parseInt(b);
var add, sub, mult, div;
if (c === "+") {
  add = number1 + number2;
  alert("The addition is " + add);
} else if (c === "-") {
  sub = number1 - number2;
  alert("The subtraction is " + sub);
  console.log("here minus");
} else if (c === "*") {
  mult = number1 * number2;
  alert("The multiplication is " + mult);
} else if (c === "/") {
  div = number1 / number2;
  alert("The division is " + div);
} */
function newFunc(a,b,c){
    console.log(a+b+c);
}
var abc =[1,2,3];
newFunc(...abc);