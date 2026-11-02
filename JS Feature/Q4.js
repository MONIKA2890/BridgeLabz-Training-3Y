
"use strict";

// Q4 - Debugging Mystery

function showMessage() {

    // Original code:
    // greeting = "Welcome";
    // console.log(greeting);

    // Error occurs because greeting is not declared.

    // Fixed code: Declare the variable using const.
    const greeting = "Welcome";

    console.log(greeting);
}

// Function call
showMessage();

// Scope demonstration
function scopeExample() {

    let message = "Hello from function";

    console.log(message);
}

scopeExample();

