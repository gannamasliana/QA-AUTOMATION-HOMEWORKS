/*
  arrow-functions.js
  Demonstrates creating the same functionality as functions.js but using arrow functions.
*/

// Arrow function to sum array elements
const sumArrayElements = array => {
    let sum = 0;

    array.forEach(element => {
        if (typeof element === "number") {
            sum += element;
        } else {
            console.log(`Skipped non-numeric value: ${element}`);
        }
    });

    return sum;
};

// Example: Array of numbers (button click counts)
const buttonClickCounts = [10, 25, 30, 5];
const totalClicks = sumArrayElements(buttonClickCounts);
console.log("Total Button Clicks:", totalClicks);

// Example: Array of strings (user roles)
const userRoles = ["Admin", "Editor", "Viewer", "Guest"];
const totalRoleLength = sumArrayElements(userRoles);
console.log("Total Length of User Role Strings:", totalRoleLength);
