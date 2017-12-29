//Task 15 and 16
// function time()
// {
//     return new Date();
// }
// alert(time());
// Task 17
// function name(firstname,lastname)
// {
//  var fullName=firstname+lastname;
//  return fullName;

// }
// alert("Welcome "+name("Faiz","khan"))
// Task 18
// var num1=parseInt(prompt("Enter Number 1"));
// var num2=parseInt(prompt("Enter number 2"));
// function addNumber(a,b)
// {  
// var sum=a+b;
// return sum;
// }
// alert(addNumber(num1,num2));
//  Task 19
// var num1=parseInt(prompt("Enter Number 1"));
// var num2=parseInt(prompt("Enter number 2"));
// var oper = prompt("Enter operation");
// function calc(a,b,d)
// {
// if (d=="+"){
// var sum=a+b;
// return sum;
// }
// else if(d=="-")
// {
// var sub=a-b;
// return sub;
// }
// else if (d=="*"){
// var multi=a*b;
// return multi;
// }
// else if(d=="/"){
// var divide=a/b;
// return divide;
// }
// }
// alert(calc(num1,num2,oper));
// Task 20
// var num1=parseInt(prompt("Enter the number you want to be square"));
// function square(a)
// {
// var d=a*a;
// return d;
// }
// alert(square(num1));
// Task 21
// var num1 = parseInt(prompt("Enter the number you want to the factorial of"));
// function fac(a) {
//     var sum = 1;
//     for (var i = a; i >= 1; i--) {
//         sum *= i;
        
//     }
//     return sum;
// }
// alert(fac(num1));
// Task 22
// var num1=parseInt(prompt("Enter Number 1"));
// var num2=parseInt(prompt("Enter number 2"));
// function series(a,b)
// {
// for(var i=a;i<=b;i++){
// console.log(i);
// }
// }
// series(num1,num2);
//Task 23
// var num1=parseInt(prompt("Enter base"));
// var num2=parseInt(prompt("Enter hypotenese"));
// function hypotense(a,b)
// {
// var hyp=calculateSquare(a,b);
// function calculateSquare()
// {
//     var sum=(a*a)+(b*b);
//     return sum;
// }
// return hyp;
// }
// alert(hypotense(num1,num2));
// Task 24
// var num1=parseInt(prompt("Enter width"));
// var num2=parseInt(prompt("Enter height"));
// function calc(a,b)
// {
//     var area=a*b;
//     return area;
// }
// alert(calc(num1,num2))
//Task 25
// var string = prompt("Enter any string or number to check whether it is palindrome or not ");
// var flag = palindrome(string);
// if(flag){
//     document.write("This is palindrome");
// }
// else{
//     document.write("Not a palindrome");
// }
// function palindrome(string){
//     var newString="";
//     for (var i=string.length; i>=0;i--){
//         newString += string.charAt(i);
//     }

//     if(newString==string){
        
//         return true;
//     }
// }
// TAsk 26
// var userInput = prompt("Enter string to init cap");
// console.log(userInput)
// var array = userInput.split(" ");

// console.log(array);
// document.write(initCap(userInput));
// function initCap(str) {
//     str = str[0].toUpperCase() + str.slice(1);
//     for (var index = 0; index < userInput.length; index++) {
//         if (str[index] === " ") {
//             console.log('first space: ' + str[index]);
//             str = str.slice(0, index + 1) + str[index + 1].toUpperCase() + str.slice(index + 2);
//             // document.write(str);
//         }

//     }
//     return str;
// }
// function firstCap(array) {
//     var cap = "";
//     var remWord = "";
//     for (var i = 0; i < array.length; i++) {
//         cap = array[i].charAt(0).toUpperCase();
//         remWord += cap;
//         console.log(array[i].length)
//         for (var index = 1; index < array[i].length; index++) {
//             remWord += array[i].charAt(index);

//         }
//         array[i] = remWord + " ";
//         cap = "";
//         remWord = "";
//     }
//     return array.join("").toString();
// }
// TAsk 27
// var input = prompt("Enter a sentence to check the longest word in it");
// var array = input.split(" ");
// console.log(array);
// document.write("Longest word with in the string is: " + longestWord(array));
// function longestWord(array) {
//     console.log(array);
//     var maxLength = 0;
//     var maxLengthString = "";
//     for (var index = 0; index < array.length; index++) {
//         console.log(array[index]);
//         if (array[index].length > maxLength) {
//             maxLength = array[index].length;
//             maxLengthString = array[index];
//         }
//     }
//     return maxLengthString;
// }
// Task 28
// document.write("Occurenc L in Hello is: " + countSpecLetter("hello", "l"));
// function countSpecLetter(string, letter) {
//     var count = 0;
//     var start = 0;
//     var value = -1;
//     for (var index = 0; index < string.length; index++) {
//         value = string.indexOf(letter, start);
//         if (value != -1) {
//             count++;
//             console.log(value);
//             start = value + 1;
//         }
//         else {
//             break;
//         }
//     }
//     return count;
// }
// task 29
// function calcCircumference(radius) {
//     return "The Circumference is " + (2 * Math.PI * radius);
// }
// function calcArea(radius) {
//     return "The Area is " + (Math.PI * radius * radius);
// }