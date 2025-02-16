/*
  arrow-functions.ts
  Demonstrates creating the same functionality as arrow-functions.js but using TypeScript with type annotations.
*/

// Arrow function to sum array elements with proper typing
export const sumArrayElements = (array: (number | string)[]): number => {
    let sum = 0;

    array.forEach((element: number | string) => {
        if (typeof element === 'number') {
            sum += element;
        } else {
            console.log(`Skipped non-numeric value: ${element}`);
        }
    });

    return sum;
};

// Example: Array of numbers (button click counts)
const buttonClickCounts: number[] = [10, 25, 30, 5];
const totalClicks: number = sumArrayElements(buttonClickCounts);
console.log('Total Button Clicks:', totalClicks);

// Example: Array of strings (user roles)
const userRoles: string[] = ['Admin', 'Editor', 'Viewer', 'Guest'];
const totalRoleLength: number = sumArrayElements(userRoles);
console.log('Total Length of User Role Strings:', totalRoleLength);
