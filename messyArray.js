messyArray.js
// Fix our array of messy words using recursion
var capitals = ["berlin", "parIs", "MaDRiD", "cHINA"];
// fix this such that the first character is capitalized and the rest not.

//loop
const fixWord = (arr) => {
  return arr.map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase());
};

//fixWord(capitals);

//recursion with innerFunc
const fixWord2 = (arr) => {
  let result = [];
  let innerFunc = (word) => {
    
    if (!word.length) {
      return;
    } else {
      result.push(word[0].slice(0,1).toUpperCase() + word[0].slice(1).toLowerCase());
      innerFunc(word.slice(1));
    }
  };
  innerFunc(arr);
  return result;
};

//fixWord2(capitals);

//recursion with innerFunc without innerFunc
const fixWord3 = (arr, i, result) => {
    result = result || [];
    
    if (!arr.length) {
      return result;
    } else {
      result.push(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase());
      return fixWord3(arr.slice(1), 0, result);
    }
};

fixWord3(capitals, 0, []);