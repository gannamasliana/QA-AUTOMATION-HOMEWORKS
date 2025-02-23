// userSummary.ts
// This module contains the class that transforms User data using its constructor.

import { User } from './interfaces';

export class UserSummary {
  name: string;
  email: string;
  companyName: string;
  addressSummary: string;

  constructor(user: User) {
    this.name = user.name;
    this.email = user.email;
    this.companyName = user.company.name;
    this.addressSummary = `${user.address.street}, ${user.address.city}`;
  }
}
