// userConverter.ts
// This module contains the class responsible for converting User data to UserSummaryData.

import { User, UserSummaryData } from './interfaces';

export class UserConverter {
  convert(user: User): UserSummaryData {
    return {
      name: user.name,
      email: user.email,
      companyName: user.company.name,
      addressSummary: `${user.address.street}, ${user.address.city}`,
    };
  }
}
