
"use strict";

// Function that applies an operation to every array element
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Callback to double each number
const doubledNumbers = applyOperation(numbers, function (num) {
    return num * 2;
});

// Callback to square each number
const squaredNumbers = applyOperation(numbers, function (num) {
    return num * num;
});

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);
