
let marks = [90, 85, 88, 80, 92];

let total = 0;
let detained = false;

// Calculate total and check minimum marks
for (let mark of marks) {
    total += mark;

    if (mark < 35) {
        detained = true;
    }
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Evaluate performance
console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

if (detained || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85 && !detained) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
