countOccurenceArray.js

/*Count the occurences of an element inside a list.
[2,7,4,4,1,4], 4
Returns 3*/

let testarr = [ 2,7,[4,4],1,[ 1,[ 4, [4,1] ] ]  ];


const countOccurence = (arr, target) => {
  let count = 0;
  
  arr.forEach( item => {
    if (item === target) {
      count++;
    }
    if (Array.isArray(item)) {
      count += countOccurence(item, target);
    }
  });
  return count;
};

countOccurence(testarr, 1);