// index.ts
// Main entry point for the project. It fetches data, converts it, and logs results.

import { User } from './interfaces';
import { UserApiRequest } from './userApiRequest';
import { UserConverter } from './userConverter';
import { UserSummary } from './userSummary';

async function main() {
  // API URL for a user from JSONPlaceholder.
  const url = 'https://jsonplaceholder.typicode.com/users/1';

  try {
    // Fetch user data (async call happens ONLY here).
    const userApi = new UserApiRequest();
    const user: User = await userApi.fetchData(url);

    // Convert using the UserConverter class.
    const userConverter = new UserConverter();
    const summaryData = userConverter.convert(user);
    console.log('User Summary Data from Converter:', summaryData);

    // Alternatively, convert using the UserSummary class constructor.
    const summaryObj = new UserSummary(user);
    console.log('User Summary from Constructor:', summaryObj);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

// Execute the main function.
main();
