// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  cb(arr.length);
}
getLength(items, arrayItem => {
  console.log("Length of the array is " + arrayItem);
});

// last passes the last item of the array into the callback.
function last(arr, cb) {
  cb(arr[arr.length - 1]);
}
last(items, arrayItem => {
  console.log("Last array element is " + arrayItem);
});

// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  cb(x + y);
}
sumNums(2, 5, arrayItem => {
  console.log("Sum of 2+5 is " + arrayItem);
});

// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  cb(x * y);
}
multiplyNums(2, 5, arrayItem => {
  console.log("Multiplying 2*5 is " + arrayItem);
});

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  cb(list.includes(item));
}
contains("Pencil", items, arrayItem => {
  console.log("Is 'Pencil' inside items? " + arrayItem);
});

/* STRETCH PROBLEM */

const duplicateArray = [
  "too lazy",
  "to actually",
  "think",
  "about something",
  "creative",
  "tbh",
  ".",
  "just",
  "too lazy",
  "tbh",
  "."
];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = [...new Set(array)];
  return cb(newArr);
}

removeDuplicates(duplicateArray, array => console.log(array));
