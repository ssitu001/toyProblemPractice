maxValueMultiDimensionArray.js

//find the max value of multi dimension array with recursion

var arr2 = [[1,2],[3],[4,5,[6,7,[8,[9,10],3,2],1,0],13,14],1];

//inner helper func
const maxValue = (arr) => {
  let currMax = 0;
  let innerFunc = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        innerFunc(arr[i]);
      } else {
          if (arr[i] > currMax) {
            currMax = arr[i];
          }
      }
    } 
  }
  innerFunc(arr);
  return currMax;
};

//maxValue(arr2);

//without innerFunc
const maxValue2 = (arr, currMax) => {
  currMax = currMax || 0;
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        currMax = maxValue2(arr[i], currMax);
      } else {
          if (arr[i] > currMax) {
            currMax = arr[i];
          }
      }
    } 
  return currMax;
};

maxValue2(arr2);