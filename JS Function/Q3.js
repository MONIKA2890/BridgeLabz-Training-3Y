
"use strict";

// Creating an object using an arrow function method
const user = (function () {
    return {
        name: "Monika",

        // Arrow function does not have its own this
        showName: () => {
            console.log("Arrow Function Name:", this.name);
        }
    };
}).call({});

// Calling arrow function
user.showName();

// Fixing it using a normal function
const userFixed = {
    name: "Monika",

    showName: function () {
        console.log("Normal Function Name:", this.name);
    }
};

// Calling normal function
userFixed.showName();
