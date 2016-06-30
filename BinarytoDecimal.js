BinarytoDecimal.js

// Given a number n (represented as a binary number string), convert n to base 10. 
// Do NOT use parseInt(n, 2). You may use the parseInt function that takes in just one argument.

const binaryToDecimal = n => {
  n = n.split("");
  let sum = 0;
  let index = 1;

  for (let i = n.length-1; i >=0; i--) {
    sum = sum + parseInt(index*n[i]);
    index *= 2;
  }
  return sum;  
}



