/*
  objects.js
  This file demonstrates creating a complex object relevant to site automation,
  such as a web page object with multiple properties and a method to display its details.
*/

// Complex object representing a webpage
const webpage = {
    title: "Login Page",
    url: "https://example.com/login",
    fields: [
        { name: "Username", placeholder: "Enter username", type: "text" },
        { name: "Password", placeholder: "Enter password", type: "password" }
    ],
    buttons: [
        { name: "Login", action: "Submit" },
        { name: "Cancel", action: "Close" }
    ],
    active: true,
    showDetails: function () {
        console.log(`Page Title: ${this.title}`);
        console.log(`URL: ${this.url}`);
        console.log("Fields:");
        this.fields.forEach((field, index) => {
            console.log(`  Field ${index + 1}: ${field.name} (Placeholder: ${field.placeholder}, Type: ${field.type})`);
        });
        console.log("Buttons:");
        this.buttons.forEach((button, index) => {
            console.log(`  Button ${index + 1}: ${button.name} (Action: ${button.action})`);
        });
        console.log(`Is Active: ${this.active}`);
    }
};

// Call the method to display the webpage's details
webpage.showDetails();

