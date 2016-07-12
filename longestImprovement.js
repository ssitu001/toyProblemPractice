longestImprovement.js

// // Given an array, find the length of the longest increasing sequence.

// // Examples
// // Input                    Output
// // [ 10 ]                   1
// // [ 10, 20, 30, 10, 20 ]   3
// // [1, 1, 2, 3, 4, 5]     5


function longestImprovement (arr) {
  var greatest = 0;
  var count = 1;
  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i] < arr[i+1]) {
      ++count;
    } else {
      greatest = Math.max(greatest, count)
      count = 1;
    }
  }
  return Math.max(greatest, count);
}

longestImprovement([ 10 ])