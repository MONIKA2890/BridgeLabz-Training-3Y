
"use strict";

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to Car prototype
Car.prototype.getDetails = function () {
    console.log("Car Brand:", this.brand);
    console.log("Car Model:", this.model);
};

// Creating first car object
const car1 = new Car("Toyota", "Fortuner");

// Creating second car object
const car2 = new Car("Hyundai", "Creta");

// Calling shared prototype method
console.log("First Car:");
car1.getDetails();

console.log("Second Car:");
car2.getDetails();

// Checking method sharing
console.log(
    "Both cars share the same method:",
    car1.getDetails === car2.getDetails
);
