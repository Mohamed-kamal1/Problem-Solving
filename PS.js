// Exercise 1: Filtering an Array
const filterEvenNumbers = arr => arr.filter(number => number % 2 === 0);
// Exercise 2: Find the Largest Number
const findLargestNumber = arr => Math.max(...arr);
// Exercise 3: Reverse a String
const reverseString = str => str.split('').reverse().join('');
// Exercise: 4 Remove Duplicates
const removeDuplicates = arr => [...new Set(arr)];

// Test the functions
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Example on Filtering an Array:
console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
// Example on Finding the Largest Number:
console.log(findLargestNumber(numbers)); // Output: 10
// Example on Reversing a String:
console.log(reverseString('hello')); // Output: 'olleh'
// Example on Removing Duplicates:
console.log(removeDuplicates([1, 1, 2, 2, 3, 3,1,3])); // Output: [1, 2, 3]
