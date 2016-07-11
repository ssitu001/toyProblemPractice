hexToBase10.js
// Build a function that converts a hexadecimal number to a base 10 number. 
// Do not use toString or parseInt.

// Input(hex)      Output(decimal)
// "ff"                  255
// "2329"            9001
// "10"                16


function hexToDec (hex) {
  var sum = 0;
  var hexObj = {
  0:  0,
  1:  1,
  2:  2,
  3:  3,
  4:  4,
  5:  5,
  6:  6,
  7:  7,
  8:  8,
  9:  9,
  "A":  10,
  "B":  11,
  "C":  12,
  "D":  13,
  "E":  14,
  "F":  15, 
  };
  function inner(hex, i) {
    hex = hex.toUpperCase();
    if(!hex.length) {
      return;
    } 
    var sliced = hex.slice(0,1);
    if(hexObj[sliced]) {
      sum += (hexObj[sliced] * Math.pow(16, i));
    }
    inner(hex.slice(1), --i);
      
    
  }
  inner(hex, hex.length-1);
  return sum;
}
hexToDec("2329")
