//1)
document.write("Check the console");
//2)
//Part 1 - Arithmetic Operators
let num1 = 8;
let num2 = 5;

let sum;
console.log("num1 = "+num1+"    ---    num2 = "+num2);
console.log("\nArithmetic Operators");
//+
container = num1+num2;
console.log("num1 + num2 = ",container);
//-
container = num1-num2;
console.log("num1 - num2 = ",container);
//*
container = num1*num2;
console.log("num1 * num2 = ",container);
///
container = num1/num2;
console.log("num1 / num2 = ",container);
//%
container = num1%num2;
console.log("num1 % num2 = ",container);


//Part 2 Relational Operators
console.log("\n\nnum1 = "+num1+"    ---    num2 = "+num2);
console.log("\nRelational Operators");
//>
console.log("num1 > num2: "+(num1>num2));
//<
console.log("num1 < num2: "+(num1<num2));
//>=
console.log("num1 >= num2: "+(num1>=num2));
//<=
console.log("num1 <= num2: "+(num1<=num2));
//===
console.log("num1 === num2: "+(num1===num2));
//!==
console.log("num1 != num2: "+(num1!=num2));


//Part 3 Logical Operators
let isSunny = true;
let isWeekend = false;
console.log("\n\nisSunny = "+isSunny+"    ---    isWeekend = "+isWeekend);
console.log("\nLogical Operators");
//&&
console.log("num1 && num2: "+(isSunny&&isWeekend));
//||
console.log("num1 || num2: "+(isSunny||isWeekend));


//Part 4 Assignment Operators
let score = 100;
console.log("\n\nscore = "+score);
console.log("\nAssignment Operators");
//+=
console.log("score += 10: "+(score+=10));
score =100;
//-=
console.log("score -= 10: "+(score-=10));
score = 100;
//*=
console.log("score *= 10: "+(score*=10));


//Part 5 User Interaction
console.log("\nUser Interaction");
let userName = prompt("Enter your name: ");
let userAge = prompt("Enter your age: ");

console.log("User's name is: "+userName);
console.log("User's age is: "+userAge);