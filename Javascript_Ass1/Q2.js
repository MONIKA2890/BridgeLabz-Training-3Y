
let userName = "Monika";
let age = 20;
let isStudent = true;
let subjects = ["Java", "Python", "JavaScript"];
let student = { name: "Monika", rollNo: 40 };
let address = null;
let result;

let report = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Result", Value: result, Type: typeof result }
];

// Display all data in one table
console.table(report);
