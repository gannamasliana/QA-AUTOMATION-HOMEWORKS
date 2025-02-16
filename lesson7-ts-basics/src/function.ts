/*
  functions.ts
  Demonstrates creating a function to sum elements in an array with TypeScript type annotations.
*/

// Function to sum array elements with proper typing
export function sumArrayElements(array: (number | string)[]): number {
    let sum = 0;

    array.forEach((element: number | string) => {
        if (typeof element === 'number') {
            sum += element;
        } else {
            console.log(`Skipped non-numeric value: ${element}`);
        }
    });

    return sum;
}

// Example: Array of numbers (page load times in seconds)
const pageLoadTimes: number[] = [1.2, 3.4, 2.1, 4.3];
const totalPageLoadTime: number = sumArrayElements(pageLoadTimes);
console.log('Total Page Load Time (seconds):', totalPageLoadTime);

// Example: Array of strings (page names)
const pageNames: string[] = ['Home', 'About', 'Contact', 'Login'];
const totalStringLength: number = sumArrayElements(pageNames);
console.log('Total Length of Page Names:', totalStringLength);
