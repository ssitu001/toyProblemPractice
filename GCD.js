GCD.js

// 2. Find the greatest common divisor (gcd) of two positive numbers.
// The GCD of two integers x and y is the greatest integer that divides
// both x and y with no remainder.
// Example:  gcd(4,36);  // 4


// facts
// inputs 2 numbers
// output one number which is the GCD


const findGCD = (num1, num2) => {

  let dividend = Math.max(num1, num2);
  let divisor = Math.min(num1, num2);
  //let quotient = Math.floor(dividend/divisor);
  let remainder = dividend % divisor;
  
  return remainder === 0 ? divisor : findGCD(remainder, divisor); 

};

findGCD(108, 30) //6