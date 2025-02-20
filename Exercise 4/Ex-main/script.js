studentName = "Nadia";
studentAge = 20;
isEnrolled = true; 

document.write("<h2>Student Info</h2>");
document.write("Name: " + studentName + "<br>"); 
document.write("Age: " + studentAge+ "<br>"); 
document.write("Enrolled: " + isEnrolled+ "<br>");

let ageString = String(studentAge);
document.write("Age Type: " + typeof ageString+"<br>"); 

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let total = Number(num1)+Number(num2); 

document.write("Sum: " + total+"<br>");

userAge = prompt("Enter your age");
if (userAge = 18) { 
    document.write("You can vote!<br>"); 
} else { 
    document.write("Sorry, you can't vote.<br>"); 
}

for (let i = 1; i < 10; i++) {
    document.write(i);
}

let num = prompt("Enter a number: ");
while (num < 10) {
    num = prompt("Enter a number greater than 10");
}