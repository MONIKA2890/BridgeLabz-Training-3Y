
"use strict";

// Q3 - Library Management System

// Creating Book class
class Book {

    constructor(title, author, ISBN, isIssued = false) {

        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;

    }

    // Issue book method
    issueBook() {

        if (this.isIssued) {

            return false;

        }

        this.isIssued = true;

        return true;
    }

    // Return book method
    returnBook() {

        if (!this.isIssued) {

            return false;

        }

        this.isIssued = false;

        return true;
    }
}

// Creating book objects
const books = [

    new Book("The Alchemist", "Paulo Coelho", "ISBN101"),

    new Book("Wings of Fire", "A.P.J Abdul Kalam", "ISBN102"),

    new Book("1984", "George Orwell", "ISBN103", true),

    new Book("The Hobbit", "J.R.R Tolkien", "ISBN104")

];

// Display available books
function displayAvailableBooks() {

    const availableBooks = books.filter(book => !book.isIssued);

    const list = document.getElementById("availableBooks");

    list.innerHTML = "";

    availableBooks.forEach(book => {

        const li = document.createElement("li");

        li.textContent =
            `${book.title} - ${book.author} - ${book.ISBN}`;

        list.appendChild(li);

    });

    console.log("Available Books:", availableBooks);
}

// Search and issue book
document.getElementById("issueForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredISBN = document.getElementById("isbn").value.trim();

    // Search book using ISBN
    const book = books.find(item => item.ISBN.toLowerCase() === enteredISBN.toLowerCase());

    const message = document.getElementById("message");

    if (!book) {

        message.textContent = "Book not found!";

    } else if (!book.issueBook()) {

        message.textContent = "Book is already issued!";

    } else {

        message.textContent = "Book issued successfully: " + book.title;

    }

    console.log("All Books:", books);

    displayAvailableBooks();

});

// Initial display
displayAvailableBooks();
