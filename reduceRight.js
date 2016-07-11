reduceRight.js

var reduceRight = function(array, iterator, acc) {
  //acc is optional //if undefined , set to the last element
  var hasAcc;
  if (!acc) {
    acc = array[array.length-1];
    hasAcc = true;
  }
  //iterate in reverse
  for (var i = array.length-1; i >= 0; i--) {
    if (hasAcc) {
      acc = array[i];
      hasAcc = false;
    } else {
      acc = iterator(acc, array[i]);   
    }
  }
  return acc;
};


console.log("6",reduceRight([1,2,3], function(a,b) {return a + b}));
console.log("6",reduceRight([1,2,3], function(a,b) {return a + b}, 0));
console.log("0",reduceRight([1,2,3], function(a,b) {return a - b}));
console.log("0",reduceRight([1,2,3], function(a,b) {return a - b}, 0));