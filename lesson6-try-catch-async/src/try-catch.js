// try-catch.js

// This function sends a request to an invalid URL and handles errors
async function fetchWithRetry() {
    try {
      // Send the request to a non-existent service
      let response = await fetch('https://nonexistentapi.com/resource'); // Invalid URL
  
      // If the first request fails, it will throw an error and proceed to the next URL
      if (!response.ok) {
        throw new Error('First request failed, retrying with a valid URL.');
      }
    } catch (error) {
      console.error(error.message); // Log the error from the first request
  
      // Now send the request to a valid service
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Valid URL
  
        if (!response.ok) {
          throw new Error('Second request failed, generating custom error.');
        }
  
        const data = await response.json();
        console.log('Received Data from retry:', data);
      } catch (secondError) {
        // If the second request fails, generate a custom error
        console.error('Custom Error: Both requests failed!', secondError);
      }
    }
  }
  
  // Call the function to attempt both requests
  fetchWithRetry();
  