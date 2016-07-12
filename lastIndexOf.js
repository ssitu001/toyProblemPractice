lastIndexOf.js
// Write the function lastIndexOf. Similar to indexOf, it takes in an array and a target value, and returns the index of the target value. However, as you might expect, when the target value occurs multiple times in the array, it should return the last instance of that value, rather than the first.

// #####Constraints:
// Solve using either higher-order functions (i.e. map, reduce, filter), OR recursion. No loops allowed!

// Examples
// Input                          Output
// array:
// [ 1, 2, 3 ]
// target:
// 2                                1
// array:
// [ 4, 5, 5, 6 ]
// target:
// 5                                2
// array:
// [ "a", "b", "c", "c" ]
// target:
// "c"                              3

function lastIndexOf(arr, target) {
  return arr.reduce( (startIndex, item, index) => {
    item === target ? startIndex = index : null;
    return startIndex;
  }, -1)
}

lastIndexOf([ 4, 5, 5, 6, 5, 5 ], 0);