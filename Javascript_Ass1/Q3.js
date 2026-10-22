
let expenses = [5000, 2000, 10000, 1500, 1000];

// Calculate total expenses
let total = 0;

for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;

// Add 10% tax
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

// Display results
console.log("Total Expenses: Rs." + total.toFixed(2));
console.log("Average Expenses: Rs." + average.toFixed(2));
console.log("Tax (10%): Rs." + tax.toFixed(2));
console.log("Final Amount: Rs." + finalAmount.toFixed(2));
