
"use strict";

// Parent constructor
function Person(name) {
    this.name = name;
}

// Method added to Person prototype
Person.prototype.showName = function () {
    console.log("Student Name:", this.name);
};

// Child constructor
function Student(name, branch) {
    // Calling parent constructor
    Person.call(this, name);

    this.branch = branch;
}

// Inheriting Person prototype
Student.prototype = Object.create(Person.prototype);

// Correcting constructor reference
Student.prototype.constructor = Student;

// Adding method to Student prototype
Student.prototype.showBranch = function () {
    console.log("Student Branch:", this.branch);
};

// Creating Student object
const student1 = new Student("Monika", "Computer Science");

// Calling parent and child methods
student1.showName();
student1.showBranch();

// Checking prototype chain
console.log(
    "Student inherits from Person:",
    student1 instanceof Person
);

console.log(
    "Student is an instance of Student:",
    student1 instanceof Student
);
