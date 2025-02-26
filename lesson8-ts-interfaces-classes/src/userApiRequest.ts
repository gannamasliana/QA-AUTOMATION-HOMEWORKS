// userApiRequest.ts
// This module contains the class that fetches User data from an API.

import { User } from './interfaces';

export class UserApiRequest {
  async fetchData(url: string): Promise<User> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  }
}
