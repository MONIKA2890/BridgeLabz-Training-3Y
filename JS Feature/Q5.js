
"use strict";

// Q5 - Hoisting Lab: The Sequence Trap

console.log("===== ORIGINAL CODE =====");

// var is hoisted and initialized with undefined
console.log(score);

// Function declaration is completely hoisted
announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

// Function call after status initialization
startGame();

function startGame() {
    console.log(status);
}


// ===== FIXED CODE =====

console.log("\n===== FIXED CODE =====");

const fixedScore = 50;
const fixedStatus = "ready";

function fixedAnnounce() {
    console.log("Game started");
}

function fixedStartGame() {
    console.log(fixedStatus);
}

console.log(fixedScore);
fixedAnnounce();
fixedStartGame();


// ===== ARROW FUNCTION =====

console.log("\n===== ARROW FUNCTION =====");

const arrowAnnounce = () => {
    console.log("Game started using arrow function");
};

arrowAnnounce();

const arrowStartGame = () => {
    console.log(fixedStatus);
};

arrowStartGame();


