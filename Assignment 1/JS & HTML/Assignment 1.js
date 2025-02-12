//Part 1 - Variables, Data Types & Type Casting
document.write("<br>Part 1");
let studentName = "Billy Bob IV";
let studentAge = 89;
let isEnrolled = true;
document.write("<br>Student Name: "+studentName)
document.write("<br>Student Age: "+studentAge);
document.write("<br>Student is enrolled: "+isEnrolled);

document.write("<br>");
document.write("<br>Student Age variable type: "+typeof(studentAge));
studentAge = studentAge.toString();
document.write("<br>Student Age variable after being converted: "+typeof(studentAge));

//Part 2 - Operators & User Interaction
let num1 = prompt("Enter your first number: ");
num1 = Number(num1);
while (isNaN(num1)){//checks if it is a number
  num1 = prompt("Error not a number please try again: ");//prompts again if it is not a number
  num1 = Number(num1);
}
let num2 = prompt("Enter your second number: ");
num2 = Number(num2);

while (isNaN(num2)){//checks if it is a number
  num2 = prompt("Error not a number please try again: ");//prompts again if it is not a number
  num2 = Number(num2);
}

//ouputs the math
document.write("<br>");
document.write("<br>Part 2");
document.write("<br>Addition: "+num1+"+"+num2+" = "+(num1+num2));
document.write("<br>Subtraction: "+num1+"-"+num2+" = "+(num1-num2));
document.write("<br>Multiplication: "+num1+"*"+num2+" = "+(num1*num2));
document.write("<br>Division: "+num1+"/"+num2+" = "+(num1/num2));
document.write("<br>Modulus: "+num1+"%"+num2+" = "+(num1%num2));
//Part 3 - Conditional Execution
document.write("<br>");
document.write("<br>Part 3");
let userAge = prompt("Enter your age: ");
userAge = Number(userAge);

while (isNaN(userAge)){//checks if the age is not NaN or a string entered into the prompt
  userAge = prompt("Error not an age please try again: ");//askes for a number
  userAge = Number(userAge);
}
if (userAge >= 18){//checks if the user's age is greate or equal to 18
  document.write("<br>You are eligible to vote!")
} else {
  document.write("<br>You are not eligible to vote yet.");
}

//Part 4 - Loops
document.write("<br>");
document.write("<br>Part 3<br>");
let numGreaterThanTen = prompt("Enter a number greater than 10: ");
numGreaterThanTen = Number(numGreaterThanTen);

while(isNaN(numGreaterThanTen)){
  numGreaterThanTen = prompt("Error number is not greater than 10, please try again: ");
  numGreaterThanTen = Number(numGreaterThanTen);
}

for(let i = 1; i<=10; i++){

  if(i==10){
    document.write(i);
  }else{
    document.write(i+", ");
  }
}