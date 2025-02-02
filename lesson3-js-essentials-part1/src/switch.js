// Using switch to check server response status

let responseCode = 400;

switch (true) {
    case (responseCode >= 200 && responseCode < 300):
        console.log("Page loaded successfully");
        break;
    case (responseCode >= 400 && responseCode < 500):
        console.log("Client error: bad request");
        break;
    case (responseCode >= 500):
        console.log("Server error: try again later");
        break;
    default:
        console.log("Unknown response status");
}
