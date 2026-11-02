
"use strict";

// Q1 - E-Commerce Product Manager

// Creating Product class
class Product {

    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    // Display product details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name},
        Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Creating multiple product objects
const products = [
    new Product(101, "Laptop", 55000, "Electronics"),
    new Product(102, "Headphones", 1800, "Electronics"),
    new Product(103, "Notebook", 150, "Stationery"),
    new Product(104, "Mobile", 22000, "Electronics")
];

// Applying 10% discount
products[1].applyDiscount(10);

// Display all products
console.log("ALL PRODUCTS");

products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter products with price greater than 1000
const expensiveProducts = products.filter(product => {
    return product.price > 1000;
});

console.log("\nPRODUCTS ABOVE ₹1000");

expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});

// Display filtered products on webpage
const productList = document.getElementById("productList");

expensiveProducts.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product.displayDetails();
    productList.appendChild(li);
});
