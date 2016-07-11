guessNumber.js
// prompt user for a number between 1 and 10 and use recursion
// to keep prompting until the user number is given number to function


function guessNumber(num) {
  var userNumber = +prompt("Guess a number from 1-10");
  
  return userNumber === num ? "Good JOB, you got it!" : guessNumber(num);
}

guessNumber(8);