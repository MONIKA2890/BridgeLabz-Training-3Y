
"use strict";

// Q4 - Custom Form Builder

// Creating FormBuilder class
class FormBuilder {

    constructor(fields, containerId) {

        this.fields = fields;

        this.container = document.getElementById(containerId);

    }

    // Create dynamic form
    createForm() {

        const form = document.createElement("form");

        form.id = "dynamicForm";

        // Create fields dynamically
        this.fields.forEach((field, index) => {

            const label = document.createElement("label");

            label.textContent = field.label + ": ";

            const input = document.createElement("input");

            input.type = field.type;

            input.name = field.name;

            input.id = "field" + index;

            input.required = true;

            form.appendChild(label);

            form.appendChild(input);

            form.appendChild(document.createElement("br"));

            form.appendChild(document.createElement("br"));

        });

        // Submit button
        const button = document.createElement("button");

        button.type = "submit";

        button.textContent = "Submit";

        form.appendChild(button);

        this.container.appendChild(form);

        // Submit event
        form.addEventListener("submit", event => {

            event.preventDefault();

            const data = this.getFormData();

            document.getElementById("result").textContent =
                JSON.stringify(data, null, 2);

            console.log("Submitted Data:", data);

        });

    }

    // Get entered form data
    getFormData() {

        const data = {};

        this.fields.forEach((field, index) => {

            data[field.name] =
                document.getElementById("field" + index).value;

        });

        return data;
    }

}

// Field information
const fields = [

    {
        type: "text",
        label: "Username",
        name: "username"
    },

    {
        type: "email",
        label: "Email",
        name: "email"
    },

    {
        type: "password",
        label: "Password",
        name: "password"
    }

];

// Create FormBuilder object
const builder = new FormBuilder(fields, "formContainer");

// Generate form
builder.createForm();
