/*
  arrays.js
  Demonstrates array creation and various operations in the context of site automation tasks.
*/

// Arrays for automation tasks
const usernames = ["admin", "test_user", "guest", "developer"]; // String array
const pageLoadTimes = [1.5, 2.3, 0.8, 3.1]; // Number array (seconds)
const isFormSubmitted = [true, false, false, true]; // Boolean array
const mixedData = ["Homepage", 5, true, { section: "Contact Us" }]; // Mixed data type array

// 1. Adding and Removing Items
console.log("\n--- Adding and Removing Items ---");
usernames.push("qa_engineer");
console.log("Usernames after adding a new user:", usernames);
usernames.pop();
console.log("Usernames after removing the last user:", usernames);

mixedData.push("Footer");
console.log("Mixed Data after adding 'Footer':", mixedData);
mixedData.pop();
console.log("Mixed Data after removing last item:", mixedData);

// 2. Sorting and Reversing
console.log("\n--- Sorting and Reversing ---");
pageLoadTimes.sort((a, b) => a - b); // Ascending order
console.log("Page Load Times (Sorted):", pageLoadTimes);
pageLoadTimes.reverse(); // Reverse order
console.log("Page Load Times (Reversed):", pageLoadTimes);

// MixedData: Sorting example for strings only
const mixedStrings = mixedData.filter(item => typeof item === "string").sort();
console.log("Sorted Strings from Mixed Data:", mixedStrings);

// 3. Filtering and Mapping
console.log("\n--- Filtering and Mapping ---");
const slowPages = pageLoadTimes.filter(time => time > 1);
console.log("Pages with load times > 1 second:", slowPages);

const loadTimesInMilliseconds = pageLoadTimes.map(time => time * 1000);
console.log("Page Load Times in Milliseconds:", loadTimesInMilliseconds);

// Boolean Array Filtering
const submittedForms = isFormSubmitted.filter(status => status === true);
console.log("Number of forms submitted:", submittedForms.length);

const formStatuses = isFormSubmitted.map((status, index) =>
    `Form ${index + 1}: ${status ? "Submitted" : "Not Submitted"}`
);
console.log("Form Submission Statuses:", formStatuses);

// MixedData: Mapping and Filtering
const typesOfMixedData = mixedData.map(item => typeof item);
console.log("Data Types in Mixed Data Array:", typesOfMixedData);

const objectsInMixedData = mixedData.filter(item => typeof item === "object");
console.log("Objects in Mixed Data Array:", objectsInMixedData);

// 4. Iterating Over Arrays
console.log("\n--- Iterating Over Arrays ---");
usernames.forEach((username, index) => {
    console.log(`User ${index + 1}: ${username}`);
});

// MixedData: Iterating
console.log("\nMixed Data Elements:");
mixedData.forEach((item, index) => {
    console.log(`Item ${index + 1}: ${JSON.stringify(item)}`);
});

// 5. Finding Elements
console.log("\n--- Finding Elements ---");
const isGuestPresent = usernames.includes("guest");
console.log("Is 'guest' present in usernames:", isGuestPresent);
const guestIndex = usernames.indexOf("guest");
console.log("Index of 'guest' in usernames:", guestIndex);

const hasBoolean = mixedData.includes(true);
console.log("Does Mixed Data include a boolean true:", hasBoolean);

// 6. Reducing Arrays: returns accumulated result
console.log("\n--- Reducing Arrays ---");
const totalLoadTime = pageLoadTimes.reduce((total, time) => total + time, 0);
console.log("Total Page Load Time (seconds):", totalLoadTime);

// MixedData: Combining values
const combinedMixedData = mixedData.reduce((acc, item) => `${acc}, ${item}`, "");
console.log("Combined Mixed Data:", combinedMixedData);

// 7. Splicing and Slicing
console.log("\n--- Splicing and Slicing ---");
usernames.splice(1, 2, "editor", "viewer");
console.log("Usernames after splicing (replacing 2 elements):", usernames);

const slicedUsernames = usernames.slice(1, 3);
console.log("Sliced Usernames (index 1 to 3):", slicedUsernames);

// 8. Flattening a Nested Array
console.log("\n--- Flattening Nested Arrays ---");
const nestedArray = [["Home", "About"], ["Services", "Contact"], ["Blog", "Careers"]];
const flattenedArray = nestedArray.flat();
console.log("Flattened Navigation Items:", flattenedArray);

// 9. Chaining Operations
console.log("\n--- Chaining Operations ---");
const longUsernames = usernames
    .filter(username => username.length > 4)
    .map(username => username.toUpperCase());
console.log("Long Usernames in Uppercase:", longUsernames);

// MixedData with Chaining
const filteredAndMapped = mixedData
    .filter(item => typeof item === "string")
    .map(item => item.toUpperCase());
console.log("Filtered and Uppercased Strings from Mixed Data:", filteredAndMapped);
