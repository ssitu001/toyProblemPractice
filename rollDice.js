rollDice.js
// write a funtion that rerutns the permutations of a "n" times dice roll.
// rollDice(0) //returns []
// rollDice(1) //[[1], [2], [3], [4], [5], [6]]


function rollDice(rounds) {
  var permutations = [];
  var choices = [1,2,3,4,5,6];
  function inner(rounds, rolled) {
    if(rounds === 0) {
      permutations.push(rolled);
    } else {
      for(var i = 0; i < choices.length; i++) {
        inner(rounds-1, rolled.concat(choices[i]));
      }
    }
    
  }
  inner(rounds, []);
  return permutations;
  
}

rollDice(2);