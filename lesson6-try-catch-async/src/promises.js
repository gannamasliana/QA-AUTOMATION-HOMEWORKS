// promises.js
// This function sends a request to the API and processes the response.
function fetchDataWithPromise() {
    // Send the GET request to the API
    fetch('https://jsonplaceholder.typicode.com/posts/1') // Replace with the desired API endpoint
      .then(response => {
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the response to JSON format
        return response.json();
      })
      .then(data => {
        // Handle the received JSON data here
        console.log('Received Data:', data);
        
        // You can now use the data in another function
        processData(data);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch or data processing
        console.error('There was an error!', error);
      });
  }
  
  // Example of another function that processes the received JSON
  function processData(data) {
    console.log('Processing data:', data);
  }
  
  // Call the function to fetch data and process it
  fetchDataWithPromise();
  