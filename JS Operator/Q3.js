
let x = 16.75;

// Perform mathematical operations
let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display the summary
console.log(`Number: ${x}`);
console.log(`Rounded Value: ${rounded}`);
console.log(`Square Root: ${squareRoot.toFixed(2)}`);
console.log(`Power (x^3): ${power.toFixed(2)}`);
console.log(`Random Number: ${randomNumber}`);
