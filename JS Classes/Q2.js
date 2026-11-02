
"use strict";

// Q2 - Student Form Validator

const form = document.getElementById("studentForm");

// Regular expressions
const patterns = {

    name: /^[A-Za-z ]+$/,

    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,

    phone: /^\d{10}$/,

    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/
};

// Validation messages
const messages = {

    name: "Name must contain alphabets only.",

    email: "Enter a valid email address.",

    phone: "Phone number must contain exactly 10 digits.",

    password: "Password needs uppercase, number and special character."
};

// Validation function
function validateField(fieldName) {

    const input = document.getElementById(fieldName);

    const error = document.getElementById(fieldName + "Error");

    const isValid = patterns[fieldName].test(input.value.trim());

    if (isValid) {

        input.classList.add("valid");
        input.classList.remove("invalid");

        error.textContent = "";

    } else {

        input.classList.add("invalid");
        input.classList.remove("valid");

        error.textContent = messages[fieldName];
    }

    return isValid;
}

// Validate while typing
Object.keys(patterns).forEach(fieldName => {

    document.getElementById(fieldName).addEventListener("input", () => {

        validateField(fieldName);

    });

});

// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const fields = Object.keys(patterns);

    const isFormValid = fields
        .map(validateField)
        .every(Boolean);

    const result = document.getElementById("result");

    if (isFormValid) {

        result.textContent = "Registration Successful!";

        result.style.color = "green";

        console.log("Student registration successful.");

    } else {

        result.textContent = "Please correct the errors.";

        result.style.color = "red";

        console.log("Registration failed.");
    }

});
