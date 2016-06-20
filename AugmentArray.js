//AugmentArray.js

//14.Augument every element in a list with a new value. The elemts are lists themselves. 
//[[],[3],[7]] , 5 Returns [[5],[3,5],[7,5]]
//with loop
//with recursion


var arr = [[],[3],[7]];

//loop
const augmentArray1 = (arr, augment) => {
  arr.forEach(function(subarr) {
    subarr.push(augment);
  });
  return arr;
};

//augmentArray1(arr, 5);

//recursive
const augmentArray2 = (arr, augment, i) => {
  i = i || 0;
  arr[i].push(augment);
  return i === arr.length-1 ? arr : augmentArray2(arr, augment, i+1);
  
};

augmentArray2(arr, 5);