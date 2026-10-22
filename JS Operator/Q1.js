
let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    // Add bonus only for permanent employees
    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total Salary: Rs." + salary);
    console.log("Global Bonus: Rs." + bonus);
}

calculateSalary(true);
calculateSalary(false);

console.log("Bonus outside function: Rs." + bonus);
