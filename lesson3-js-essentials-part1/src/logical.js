// Using logical operators in automation
let pageLoadTime = 3.5; // in seconds
let isUserLoggedIn = true;
let hasAdminRights = false;
let isPageCached = false;
let responseTime = 2.5;
let maxResponseTime = 3.0;

// AND operation
console.log("Can the user change settings:", isUserLoggedIn && hasAdminRights);

// OR operation
console.log("Can a cached page be used:", isPageCached || pageLoadTime < 5);

// NOT operation
console.log("Is the page NOT cached:", !isPageCached);

// Greater than and less than
console.log("Is response time acceptable:", responseTime < maxResponseTime);

// Equality and strict equality
console.log("Is response time exactly max:", responseTime == maxResponseTime);
console.log("Is response time exactly max (strict check):", responseTime === maxResponseTime);

// Inequality
console.log("Is response time different from max:", responseTime != maxResponseTime);
console.log("Is response time different from max (strict check):", responseTime !== maxResponseTime);

// Combining multiple operators
console.log("Is user logged in and response time acceptable:", isUserLoggedIn && responseTime < maxResponseTime);
console.log("Is either the user an admin or response time too high:", hasAdminRights || responseTime > maxResponseTime);
