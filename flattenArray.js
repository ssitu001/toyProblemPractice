flattenArray.js
//Given a list of lists of numbers, return a flat list of all numbers. 
//[[2,7], [8,3], [1,4]] Returns [2,7,8,3,1,4]*/
//for loop
//recursion

var arr = [ [1,2], [3,[4,5]], [6,[7,[8,9]],0] ];

const flatten = (array, result) => {
  result = result || [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i], result);
    } else {
      result.push(array[i]);
    }
  }
  return result;
};
//flatten(arr, []);

const flatten2 = (array) => {
  let result = [];
  let innerFunc = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        innerFunc(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  };
  innerFunc(array);
  return result;
};

flatten2(arr);