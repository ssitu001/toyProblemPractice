randomWords.js
// Given a string how many random words can you make out of it?
// The words do not have to be real words 
// each letter can only be used once

function random(word) {
  var result = [];
  word = word.split("");
  function inner(word, wordsArr) {
    if(!word.length) {
      result.push(wordsArr);
    }
    for (var i = 0; i < word.length; i++) {
      var copyStr = word.slice();
      copyStr.splice(i, 1);
      inner(copyStr, wordsArr.concat(word[i]));
    }
  }
  inner(word, []);
  return result;
}



random("simon");
