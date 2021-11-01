/*
  In this lab session, students are required to convert an existing code 
  to use the four array functions that we have covered. 
  - .forEach()
  - .filter()
  - .map()
  - .reduce()

  Note: Refer to MDN or search the web to get help!

  How to run JS file:

  Option 1: If you are using VS Code, you can install "Code Runner" extension. So
  that you are able to right click on this file and select "Run Code".

  Option 2: If you have install Node, simply type 'node index.js' on the terminal.
*/

// Challenge 1: Refactor the following code using .forEach()

const numbers = [1, 2, 3, 4];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log("total", total); // 10

// Challenge 2: Refactor the following code using .filter()

const alphabets = ["a", "b", "a", "b", "b"];
const alphaB = [];
alphabets.forEach((alpha) => {
  if (alpha === "b") alphaB.push(alpha);
});
console.log("alphaB", alphaB); // [ 'b', 'b', 'b' ]

// Challenge 3: Refactor the following code using .map()
const genderShortForm = ["m", "f", "m", "f"];
let genderSpelledForm = [];

genderShortForm.forEach((x) => {
  if (x === "m") genderSpelledForm.push("Male");
  if (x === "f") genderSpelledForm.push("Female");
});
console.log("genderSpelledForm", genderSpelledForm);

// Challenge 4: Add 'currentSweetsInJug' into the reduce function so that
// totalSweetsInJug would become 10

const currentSweetsInJug = 4;
const putNewSweetsInJug = [1, 2, 3];

const totalSweetsInJug = putNewSweetsInJug.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("totalSweetsInJug", totalSweetsInJug); // 6
