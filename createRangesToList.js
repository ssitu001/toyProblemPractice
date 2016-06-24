createRangesToList.js


//Create a new list with a given value and length. 0, 5 Returns [0,0,0,0,0] 7, 3 Returns [7,7,7]*/
//loop
//inner

const createList = function (value, length, list) {
  list = list || [];
  
  list.push(value)

  if (list.length === length) {
    return list;
  }
  return createList(value, length, list);
}

createList(0, 5);


// Similiarly create the list for range of numbers
// So for the integers in range(2, 9); Output will be [3, 4, 5, 6, 7, 8]


const createRange = function (a, b, arr) {
  
  arr = arr || [];
  if (a === b-1) {
    return arr;
  }
  a = a+1;
  arr.push(a);
  
  return createRange(a, b, arr);
}

createRange(-1, 4);