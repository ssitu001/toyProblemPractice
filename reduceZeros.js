reduceZeros.js
//12.Reduce series of 0s to a single 0. [2,0,0,0,1,4] Returns [2,0,1,4] recursively

function reduceZeros(arr) {
  let zeroCount = 0;
  let newArr = [];
  function inner(arr) {
    if(arr.length === 0) {
      return;
    } else {
      var firstEl = arr.splice(0,1)[0];
      if(firstEl === 0 && zeroCount === 0 ) {
        newArr.push(firstEl);
        zeroCount++;
      } else if (firstEl !== 0) {
        newArr.push(firstEl);
      }
      inner(arr);
    }
  }
  inner(arr);
  return newArr;
}

reduceZeros([2,0,0,0,1,4])