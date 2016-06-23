//characterSum.js


// Given a string of arbitrary size, convert each character 
// into its integer equivalent and sum the entirety.

// Examples
// Input          Output
// str:
// "123"      6
// str:
// "0101"     2
// str:
// "so cool!!1!"  1

//iteratively
function charSum (str) {
 var int = 0;
 for (var i = 0; i < str.length; i++) {
   if ( !isNaN(Number(str[i]))) {
     int = int + Number(str[i]);
   }
 }
 return int;
}


//with reduce
function charSum(str) {
 str = str.split("");
 return str.reduce( (acc, char) => {
   if ( !isNaN(Number(char))) {
     acc = acc + Number(char);
   }
   return acc;
 }, 0);
}


//recursively
function charSum(str, acc) {
  acc = acc || 0;
  
  if (!str.length) {
    return acc; 
  }
  
  var firstChar = str.charAt(0);
  if ( !isNaN(Number(firstChar))) {
    acc = acc + Number(firstChar);
  }
  return charSum(str.slice(1), acc);
  
}


charSum("so cool!!1!");