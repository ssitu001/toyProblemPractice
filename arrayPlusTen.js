arrayPlusTen.js
//Create an array from number +10; 
//Recursively

function arrNum(num) {
  var result = [];
  function inner(n) {
    if (result.length === 11) {
      return result;
    } else {
      result.push(n);
      return inner(n+1);
    }
  }
  return inner(num)
}

//arrNum(6);


function arrNum2(num) {
  //var count = 0;
  var result = [];
  function inner2(n, count) {
    count = count || 0;
    if (count === 11) {
      return;
    } else {
      result.push(n);
      inner2(n+1, count+1);
    }
  }
  inner2(num);
  return result;
}

arrNum2(7);