printRange.js
// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  var ranger = [];
  if( x===y || y-x === 1 || x-y === 1) {
    return ranger;
  } else if (y > x) {
      ranger.push(x+1);
      return ranger.concat(range(x+1, y))
  } else {
      ranger.push(x-1);
      return ranger.concat(range(x-1, y))
  }
};