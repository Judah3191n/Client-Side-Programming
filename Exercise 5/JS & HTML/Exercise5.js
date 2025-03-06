document.write("Check the console for output");
//1) Create a book Object
let book = {
    title: "Life of Pi",
    author: "Yann Marte",
    available: true,

    getDetails(){
        return `Title: ${this.title}, Author: ${this.author}`;
    },

    borrowBook(){
        //if the book is aviable (true/false)
        if(this.available){
            this.available = false;//not available because you just borrowed it
            return "Success, book has been borrowed";
        } else {
            return "Failure, book is currently unavialble";
        }
    },

    returnBook(){
        //if book is available (true/false)
        if (this.available){
            return "Failure, book is already returned"
        } else {
            this.available = true;//if book is not available they you have the right book to return
            return "Success, book has been returned";
        }
    }
};
//test
console.log(book.getDetails());  
console.log(book.borrowBook());  
console.log(book.borrowBook());  
console.log(book.returnBook()); 


//2) Librarian Object
let librarian = {
    firstName: "Sarah",
    lastName: "Smith",
    shift: "morning",

    //prints out the full name of the librarian
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    //takes in a new shift
    set setShift(shift){
        //if the shift is valid then it is assigned to the librarian
        if(shift==="morning"||shift==="evening"){
            this.shift=shift;
            console.log(`Success, Shift has been set to ${shift}`);
        } else {
            console.log("Failure, invalid shift (morning/evening)");//shift is not valid so promps the user again
        }
    },
    
    //returns the shift
    getShift(){
        return `Shift: ${this.shift}`;
    }
};
//test
console.log(librarian.fullName);  
librarian.shift = "night";  
librarian.shift = "evening";  
console.log(librarian.shift);


//3) Create a Library
let library = {
    books: [],
    librarian: librarian,

    //adds a book to the array using the push method
    addBook(newBook){
        this.books.push(newBook);
    },

    listAvailableBooks(){
        //calls the array, filters it baised on if available = true, prints the title of the each book that meets the requirements
        return this.books.filter(book => book.available).map(book => book.title);
    }
};
//test
library.addBook({ title: "Life of Pi", author: "Yann Martel", available: true });
library.addBook({ title: "Introduction to JavaScript", author: "John Doe", available: false });
library.addBook({ title: "The Catcher in the Rye", author: "J.D. Salinger", available: true });

//lists the books to the console
console.log(library.listAvailableBooks());