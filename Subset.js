// Create a function that takes two arrays and determine whether the second array is a subset of the first array. 
// Arrays will only contain primitive values.

const subSet = (arr, sub) => {
  let index;
  if (sub.length > arr.length ) {
    return false;
  }
  
  for (let i = 0; i < sub.length; i++ ) {
    if (arr.indexOf(sub[i]) === -1) {
      return false;
    }
    index = arr.indexOf(sub[i]);
    arr.splice(index, 1);
  }
  return true;

};

//subSet([ 1, 2, 3, 4 ], [ 2, 3, 4 ])
//subSet([ 2, 2, 2, 3, 4 ], [ 2, 4, 3 ]);
//subSet([ 2, 3, 3, "a" ], [ 3, 3, 3, "a" ]);