rMap.js

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var newArray = array.slice(0);
  var mapped = [];
  if(!newArray.length) {
    return mapped;
  } else {
      mapped.push(callback(newArray.splice(0,1)[0]));
      return mapped.concat(rMap(newArray, callback));
  }
};