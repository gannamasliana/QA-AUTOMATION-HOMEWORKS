// Operations with different variable types in the context of page automation
// Numeric variables for calculating page load time
let pageLoadTime = 3.5; // in seconds
let apiResponseTime = 1.2;

// Arithmetic operations
let totalLoadTime = pageLoadTime + apiResponseTime;
console.log("Total page load time:", totalLoadTime, "seconds");

// String variable for the page URL
let baseUrl = "https://example.com";
let path = "/dashboard";
console.log("Full URL:", baseUrl + path);

// Additional arithmetic operations with different variable types
const maxUsers = 100; // constant variable
let currentUsers = 42;

console.log("Remaining users allowed:", maxUsers - currentUsers);
console.log("Double the current users:", currentUsers * 2);
console.log("Average response time per user:", totalLoadTime / currentUsers);
console.log("Modulo operation (remainder when dividing users by 3):", currentUsers % 3);

// String and number concatenation
let serverCount = 3;
console.log("Total active servers: " + serverCount);

// Exponentiation
let retryLimit = 2;
console.log("Max retries squared:", retryLimit ** 2);

// Variable conversions
let userCountStr = "50";
let userCountNum = Number(userCountStr);
console.log("Converted string to number:", userCountNum);

let responseTimeStr = totalLoadTime.toString();
console.log("Converted number to string:", responseTimeStr);

let isFeatureEnabled = "true";
let featureEnabledBool = Boolean(isFeatureEnabled);
console.log("Converted string to boolean:", featureEnabledBool);

