/*
  getter-setters.js
  Demonstrates creating an object with getters, setters, and a method for field manipulation.
*/

const pageAutomation = {
    pageDetails: {
        pageName: "Home",
        loadTime: 1.5, // in seconds
    },
    get name() {
        return this.pageDetails.pageName;
    },
    set name(newName) {
        this.pageDetails.pageName = newName;
    },
    get loadTime() {
        return this.pageDetails.loadTime;
    },
    set loadTime(newTime) {
        if (typeof newTime === "number" && newTime > 0) {
            this.pageDetails.loadTime = newTime;
        } else {
            console.log("Invalid load time. Please enter a positive number.");
        }
    },
    calculatePerformance() {
        const threshold = 2; // seconds
        return this.pageDetails.loadTime < threshold
            ? "Page performance is good."
            : "Page is loading slowly.";
    },
};

// Example usage
console.log("Initial Page Name:", pageAutomation.name);
console.log("Initial Load Time:", pageAutomation.loadTime, "seconds");

// Updating fields using setters
pageAutomation.name = "Contact";
pageAutomation.loadTime = 2.8;

console.log("\nUpdated Page Name:", pageAutomation.name);
console.log("Updated Load Time:", pageAutomation.loadTime, "seconds");

// Performance analysis
console.log("Performance Analysis:", pageAutomation.calculatePerformance());

// Invalid setter usage
pageAutomation.loadTime = -5; // Demonstrates validation
