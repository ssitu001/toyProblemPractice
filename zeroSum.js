zeroSum.js

// Given an array of negative/positive integers, return true if there exists two numbers 
// whose sum is zero.

// Examples
// Input            Output
// [ 1, 3, 2, -3 ]  true
// [ 5, 7, 2, 9 ]   false


function zeroSum(arr) {
  let blah = false
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i] !== 0 && arr.includes(-arr[i])) {
      blah = true;
    } 
      
    if (arr[i] === 0) {
      arr.splice(i,1);
      if (arr.includes(0)) {
        blah = true;
      }
    }
    
  }
  return blah;
  
}




zeroSum([  0, -2, 1 ])