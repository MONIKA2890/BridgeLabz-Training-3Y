
"use strict";

// Q3 - Transaction Validator

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to store valid and invalid transactions
const valid = [];
const invalid = [];

// Custom error classes
class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

class MissingFieldError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingFieldError";
    }
}

class NullTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullTransactionError";
    }
}

console.log("===== TRANSACTION VALIDATOR =====");

// Loop through transactions
for (let i = 0; i < transactions.length; i++) {

    const transaction = transactions[i];

    try {

        // Check null transaction
        if (transaction === null) {
            throw new NullTransactionError(
                "Transaction entry is null"
            );
        }

        // Check missing ID or amount
        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new MissingFieldError(
                "Transaction ID or Amount is missing"
            );
        }

        // Check negative amount
        if (transaction.amount < 0) {
            throw new NegativeAmountError(
                "Transaction amount cannot be negative"
            );
        }

        // Store valid transaction
        valid.push(transaction);

        console.log(
            "Transaction ID:", transaction.id,
            "| Amount:", transaction.amount,
            "| Status: VALID"
        );

    }

    catch (error) {

        // Store invalid transaction and error details
        invalid.push({
            transaction: transaction,
            errorType: error.name,
            message: error.message
        });

        console.log(
            "Transaction", i + 1,
            "| Error:", error.name,
            "| Message:", error.message
        );
    }
}

// Final report
console.log("\n===== FINAL REPORT =====");

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);

console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);

console.log("========================");

