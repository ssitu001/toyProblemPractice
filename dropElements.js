dropElements.js

function dropElements(arr, func) {

  var index = 0;
  while (!func(arr[index])) {
    index++;
    if (index === arr.length) {
      return [];
    }
  }
  return arr.slice(index);

}
//dropElements([0, 1, 0, 1], function(n) {return n === 1;})
dropElements([1, 2, 3, 9, 2],  function(n) {return n > 2;}) // should return [3, 9, 2]
//dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //[]
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;})