
"use strict";

// Q1 - Dynamic Data Parser

const apiData = [
    "25", "true", "false", "NaN", " ",
    "100px", "3.14", null, undefined
];

const validNumbers = [];
const invalidValues = [];

console.log("===== DYNAMIC DATA PARSER =====");

for (let i = 0; i < apiData.length; i++) {

    const value = apiData[i];

    // Convert into Number, Boolean and String
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log("\nItem:", i + 1);
    console.log("Original Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    // Check invalid values
    const isBlank =
        typeof value === "string" && value.trim() === "";

    if (Number.isNaN(numberValue) || isBlank) {

        invalidValues.push(value);
        console.log("Status: INVALID");

    } else {

        validNumbers.push(numberValue);
        console.log("Status: VALID");
    }
}

// Final Report
console.log("\n===== FINAL REPORT =====");

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidValues);

console.log("Total Valid:", validNumbers.length);
console.log("Total Invalid:", invalidValues.length);

console.log("========================");
