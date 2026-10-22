
let scores = [];

// Generate 8 random scores between 30 and 100
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

// Calculate performance statistics
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
let passed = scores.filter(score => score >= 50);
let updatedScores = scores.map(score => score);

// Display the summary
console.log("Scores:", updatedScores);
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Average Score:", average.toFixed(2));
console.log("Students Passed:", passed.length);
