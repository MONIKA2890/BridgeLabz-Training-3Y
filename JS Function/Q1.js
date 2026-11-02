
"use strict";

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Function that accepts another function as a callback
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Calling the callback function
    callback();
}

// Function call
greetUser("Monika", showEndMessage);
