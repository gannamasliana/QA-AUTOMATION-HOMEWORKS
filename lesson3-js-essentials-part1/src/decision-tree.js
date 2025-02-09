// decision-tree.js
// Logical branching to check the page status

let responseCode = 200;

if (responseCode >= 200 && responseCode < 300) {
    console.log("Page loaded successfully");
} else if (responseCode >= 400 && responseCode < 500) {
    console.log("Client error: bad request");
} else if (responseCode >= 500) {
    console.log("Server error: try again later");
} else {
    console.log("Unknown response status");
}
