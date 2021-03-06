// Sorting Algorithms
//
// Aim: to understand the work of loops and nested loops and array methods
//
// You need to create the function sortAges that takes one array as parameter input

/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method 
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/
//1)Create the function inside, Think about nested loops

function sortAges(arr) {
  //create function here
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArr.push(arr[i]);
    }
  }

  //sorting algorithms are quite complicated, so more encouraging needed
  for (i = 0; i < newArr.length; i++) {
    for (j = 0; j < newArr.length; j++) {
      if (newArr[j] > newArr[j + 1]) {
        //here you are just switching between first and second
        let term = newArr[j]; // should learn not to use global variabls, let or var are important
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = term;
      }
    }
  }
  return newArr;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "sortAges function works - case 1",
  arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
);

test(
  "sortAges function works - case 2",
  arraysEqual(sortAges(agesCase2), [55, 60, 100])
);
