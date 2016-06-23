properFormat.js

// Capitalize each first letter of array element and make simple the res.
// so [sIMon, sITU, tOy, pRaTice] should return [Simon, Situ, Toy, Practice]

var testArray = ["sIMon", "sITU", "tOy", "pRaTice"];

function proper (word) {
  var first = word.slice(0,1).toUpperCase();
  var rest = word.slice(1).toLowerCase();
  
  return first + rest;
}


//with map
// function properArray (arr) {
//  return arr.map( item => proper(item) );
// }

//recursively
function properArray (arr, i) {
  i = i || 0;
  
  if(i === arr.length) {
    return arr;
  }
  arr[i] = proper(arr[i]);
  
  return properArray(arr, i+1);
}



properArray(testArray);