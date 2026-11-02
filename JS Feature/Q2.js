
"use strict";

// Q2 - Employee Bonus Calculator

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("===== EMPLOYEE BONUS REPORT =====");

// Loop through employees
for (let i = 0; i < employees.length; i++) {

    try {

        const employee = employees[i];

        // Check missing properties
        if (
            !employee ||
            !("name" in employee) ||
            !("salary" in employee) ||
            !("years" in employee)
        ) {
            throw new Error("Employee details are missing");
        }

        // Convert string values into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Validate numeric values
        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years)
        ) {
            throw new Error("Invalid salary or experience");
        }

        // Calculate bonus
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        // Calculate total salary
        const totalSalary = salary + bonus;

        // Display employee details
        console.log("\nEmployee:", employee.name);
        console.log("Salary: ₹" + salary);
        console.log("Experience:", years, "years");
        console.log("Bonus: ₹" + bonus);
        console.log("Total Salary: ₹" + totalSalary);

    }

    catch (error) {

        console.log("Error:", error.message);

    }
}

// Final message
console.log("\n===== CALCULATION COMPLETED =====");

