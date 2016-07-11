highestFrequency.js

// Given a string of only lowercase alphabet characters, find the character that occurs 
// the highest number of times. If any characters tie, return them all in alphabetical order.

// Examples
// Input              Output
// "abcdc"          "c"
// "occurring"     "cr"
// "xxyyzz"         "xyz"


function highestFreq (str) {
  var obj = {};
  var result = [];
  var currLargest = 0; 
  for (var i = 0; i < str.length; i++) {
    obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1;
  }
  
  for (var key in obj) {
    currLargest = Math.max(currLargest, obj[key]);
  }
  
  for (var letter in obj) {
    if (obj[letter] >= currLargest) {
      result.push(letter);
    }  
  }

  return result.sort().join("");

}


highestFreq("abcdc");