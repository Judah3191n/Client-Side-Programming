//1)
document.write("Check the console");
//2)
//Part 1 - Variables and Constants
let userAge = prompt("What is your age?: ");
let userHeight = prompt("What is your height?: ");

console.log("User is "+userAge+" old, and "+userHeight+" tall");


//Part 2 - Arrays
let petNames = ["Molly","Scout","Olive"];
console.log("Pet Names: ["+ petNames+"]");
petNames.pop();
petNames.push("Tangerine");
petNames.reverse();
console.log("Updated names: ["+petNames+"]");


//Part 3 - Objects
let car = {make:"Fiat", model:500, year:"2012"};

let text = "";//loops the object into a string
for (let x in car) {
  text += car[x] + " ";
};
console.log("Origional Car: "+text);//prints out object

car.make = "Toyota";
Object.defineProperty(car, "weight", {value:"850kg"});

text = "";//loops the object into a string
for (let x in car) {
  text += car[x] + " ";
};
console.log("Update car: "+text+car.weight);//prints out updated object


//Part 4 - Type Operators
let word = "Hello World!";
console.log("String is: "+word);
console.log("Sliced string: "+word.slice(0,5));
console.log("Index of '!': "+word.indexOf("!"));
console.log("Length of string: "+word.length);