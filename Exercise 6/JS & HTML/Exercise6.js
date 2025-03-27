//Task 1: Library Book System
console.log("-----------Task 1: Library Book System------------");
class createBook{
    constructor(title,author,publisher) {
        this.title = title;
        this.auther = author;
        this.publisher = publisher;
        this.available = true;
    }
    displayDetails() {
        console.log(`
            Title: ${this.title}\n
            Author: ${this.auther}\n
            Publisher: ${this.publisher}\n
            Available: ${this.available}\n
        `);
    }
    borrowBook(){
        if(this.available){
            console.log("Success - Book borrowed");
            this.available = false;
        } else {
            console.log("Error - Book unavailable");
        }
    }
    returnBook(){
        if(!this.available){
            console.log("Success - Book has been returned");
            this.available = true;
        } else {
            console.log("Error - Book already returned");
        }
    }
}
//book 1 test
let book1 = new createBook("IT Developement and torture","Judah Csanyi IV", "Judah Studio");
book1.displayDetails();
book1.borrowBook();
book1.returnBook();
book1.displayDetails();

//book 2 test
let book2 = new createBook("It is 1 am I want to sleep", "Insomnia","NSCC - Exercise 6")
book2.borrowBook();
book2.displayDetails();
book2.returnBook();
book2.displayDetails();






//Task 2 - Car Rental System
console.log("\n\n\n\n\n\n--------Task 2 - Car Rental System---------");
class createCar {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
        this.available = true;
    }
    rentCar(){
        if(this.available){
            this.available=false;
            console.log("Success - Car rented");
        }else{
            console.log("Error - Car already rented");
        }
    }

    returnCar(){
        if(!this.available){
            this.availabe=true;
            console.log("Success - Car returned");
        } else {
            console.log("Error - Car already returned");
        }
    }

    displayDetails(){
        console.log(`
            Brand: ${this.brand}\n
            Model: ${this.model}\n
            Available: ${this.availabe}\n
        `);
    }
}

//car 1 test
let car1 = new createCar("Toyoto","Corolla");
car1.displayDetails();
car1.rentCar();
car1.returnCar();
car1.displayDetails();

//car 2 test
let car2 = new createCar("Ford","Mustang")
car2.displayDetails();
car2.rentCar();
car2.returnCar();
car2.displayDetails();
