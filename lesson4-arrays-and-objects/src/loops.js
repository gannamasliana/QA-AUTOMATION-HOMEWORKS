/*
  loop.js
  Demonstrates different types of loops (for, do...while, while) in the context of site automation tasks.
*/

// FOR loop examples
// Simulate iterating through a list of form fields on a page
const formFields = ["Username", "Password", "Email", "Phone Number"];
formFields.forEach((field, index) => {
    console.log(`Form Field ${index + 1}: ${field}`);
});

// Simulate iterating through 10 navigation menu items
for (let i = 1; i <= 10; i++) {
    console.log(`Navigating to menu item #${i}`);
}

// Simulate going through page numbers (e.g., pagination)
for (let page = 10; page >= 1; page--) {
    console.log(`Visiting page #${page}`);
}

// Iterate from 100 to 0 with a step of 10
for (let i = 100; i >= 0; i -= 10) {
    console.log(`Current value of iterator (FOR): ${i}`);
}

// DO...WHILE loop example
// Simulate checking for a popup message until it's closed
let popupVisible = true;
let attempts = 0;
do {
    attempts++;
    console.log(`Checking for popup visibility... Attempt ${attempts}`);
    // Simulate popup being closed on the 3rd attempt
    if (attempts === 3) {
        popupVisible = false;
    }
} while (popupVisible);

// WHILE loop example
// Simulate scrolling through a webpage until the bottom is reached
let scrollPosition = 0;
const totalPageHeight = 100;
const scrollStep = 20;

while (scrollPosition < totalPageHeight) {
    scrollPosition += scrollStep;
    console.log(`Scrolled to position: ${scrollPosition}`);
}
console.log("Reached the bottom of the page (WHILE).");

// DO...WHILE example with decrementing iterator (100 to 0 with step 10)
let iterator = 100;
do {
    console.log(`Current value of iterator (DO...WHILE): ${iterator}`);
    iterator -= 10;
} while (iterator >= 0);

// WHILE example with decrementing iterator (100 to 0 with step 10)
let reverseIterator = 100;
while (reverseIterator >= 0) {
    console.log(`Current value of iterator (WHILE): ${reverseIterator}`);
    reverseIterator -= 10;
}

