//DATA TYPES
var hello = "world"; //STRING
var num = 7; //NUMBERS
var bool = true; //Booleans
var undef = undefined; //UNDEFINED
var none = null; //NULL

/*
console.log(5);

console.log(hello);

console.log("world")

console.log(num);

*/

//* Changed variable information here!
num = 29;

//Send to website console
console.log(num);


//? MATH VARIABLES

var foo;

console.log(foo) // currently undefined

foo = 19;

console.log(foo + 4); // 23

//? Concat

var textOne = 'Hello';

console.log(textOne + ' ' + 'World' + "Dude!")


//!TEMPERATURE CONVERTER

//TODO      Farenheit = Celceius * 9/5 + 32;
//CONSOLE.LOG(ANSWER)

var farenheit;
var celNum = 24;

farenheit = celNum * 9/5 + 32;

console.log(farenheit)

//! Age calculator
//Subtract the birth year from the current year to get the age.
//* Console.log(answer)

var birthYear = 2000;
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

console.log(age)


//Bool variables
//let 
//const
//escape the character
//wrap with opposite quote
//addition "+"
// subtraction "-"
// division "/"
//multiplication "*"
//increment "++"
//decrement"--"
//modulus "%"


//const == IMMUTABLE
//CANNOT CHANGE INFORMATION TO const;
const bar = 'You can not change me!';

// bar = 8;

console.log(bar);

//let = its accessible based on his scope;

let bar2 = 'You can change me!'

bar2 = 10;

console.log(bar2);


//Dealing with quotes in strings
let stringQuote = "You aren't special";
console.log(stringQuote)
//escaping the quote
let escapeQuote = 'You aren\'t special'
console.log(escapeQuote);

//increments and decrements
let num3 = 0;
console.log(num3);
num3++;
console.log(num3);
num3--;
console.log(num3);

//setting multi-variables
let baz = 2, baz2 = 10, baz3;

baz3 = 8;
console.log("I'm Baz3!" + baz3);

//Template Literals
console.log(`Hello Baz2 ${baz}`)

////  Simple interest rate calculator 
//// Ask the user to input the principal amount, rate of interest, and time period in years.
//// SI = (P * R * T) / 100

//TODO Personal Greeting
//? Input the user's name.
//* console out  a personalized greeting message.
var userName = 'Bianca'
var greeting = " Up dog "
console.log(greeting + userName)


//TODO Tip Calculator
//? Input the user to input the bill amount and the tip percentage.
//* Calculate the tip amount and console the total bill.

var billAmount = 124.55;
var tipPercentage = .25;
var tipAmount = billAmount * tipPercentage;

var answer = billAmount + tipAmount;

//.toFixed(#) = amount of decimal places
console.log(answer.toFixed(2) + "$");


//TODO Age Calculator in days
//? Input the user age in years
//*  Multiply the age in years by 365.
//console the total days

var yearsOld = 23;
var days = 365;

console.log(yearsOld * days);
