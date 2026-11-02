
"use strict";

// Q5 - Movie Ticket Booking

const form = document.getElementById("bookingForm");

// Regular expressions
const namePattern = /^[A-Za-z ]+$/;

const emailPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get user input
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const seats = Number(document.getElementById("seats").value);

    const message = document.getElementById("message");

    const ticket = document.getElementById("ticket");

    // Store validation errors
    const errors = [];

    // Validate name
    if (!namePattern.test(name)) {

        errors.push("Name must contain alphabets only.");

    }

    // Validate email
    if (!emailPattern.test(email)) {

        errors.push("Enter a valid email address.");

    }

    // Validate seats
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {

        errors.push("Seats must be between 1 and 10.");

    }

    // If errors exist
    if (errors.length > 0) {

        message.textContent = errors.join(" ");

        ticket.textContent = "";

        console.log("Booking Failed:", errors);

        return;
    }

    // Create booking object
    const booking = {

        name: name,

        email: email,

        seats: seats

    };

    // Display successful booking
    message.textContent = "Booking Successful!";

    message.style.color = "green";

    ticket.innerHTML = `
        <h2>Movie Ticket Details</h2>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>
    `;

    console.log("Booking Details:", booking);

});
