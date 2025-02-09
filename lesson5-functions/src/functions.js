/*
  functions.js
  Demonstrates creating a function to sum elements in an array.
*/

// Function to sum array elements
function sumArrayElements(array) {
    let sum = 0;

    array.forEach(element => {
        if (typeof element === "number") {
            sum += element;
        } else {
            console.log(`Skipped non-numeric value: ${element}`);
        }
    });

    return sum;
}

// Example: Array of numbers (page load times in seconds)
const pageLoadTimes = [1.2, 3.4, 2.1, 4.3];
const totalPageLoadTime = sumArrayElements(pageLoadTimes);
console.log("Total Page Load Time (seconds):", totalPageLoadTime);

// Example: Array of strings (page names)
const pageNames = ["Home", "About", "Contact", "Login"];
const totalStringLength = sumArrayElements(pageNames);
console.log("Total Length of Page Names:", totalStringLength);

