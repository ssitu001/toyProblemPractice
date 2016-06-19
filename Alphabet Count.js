Alphabet Count
// Given an alphabet and a string of text, write a method that tallies the count of 
// each letter defined in said alphabet (case insensitive), then return the result of this tally.


const alphabetCount = (alphabet, text) => {
  var obj = {};
  var sum = 0;
  alphabet = alphabet.toLowerCase();
  text = text.toLowerCase();
  for (var i = 0; i < alphabet.length; i++) {
    obj[alphabet[i]] = 0;
  }
  for (var j = 0; j < text.length; j++) {
    if (text[j] in obj) {
      obj[text[j]]++; 
    } 
  }
  for (var key in obj) {
    sum = sum + obj[key];
  }
  return sum === 0 ? "no matches" : obj;
}


alphabetCount("aBc", "aabbccdd");


// Input                                         Output
// alphabet:
// "aBc"
// text:
// "aabbccdd"                              "a:2,b:2,c:2"

// alphabet:
// "x"
// text:
// "Racer X is my friend :)"          "x:1"

// alphabet:
// "123"
// text:
// "o hai"                                      "no matches"
