//GreatestLetter.js


//map and reduce toy problem.js
//given an array of STRINGS return a single string consisting of the last letter of the alphabet in the strings
//var exampleString = ['simon', 'situ', 'toy', 'problem', 'practice']; //in this example the return string would be "suyrt"
//use map and reduce or if your feeling lucky just reduce.


//------------ Solution 1 using both map and recduce --------------------
var exampleArray = ['simon', 'situ', 'toy', 'problem', 'practice'];

const greatestLetter1 = (arr) => {
  
 return arr.map( word => word.split("").sort().pop()).reduce( (a, b) => a+b );
}

greatestLetter1(exampleArray) //"suyrt"


//------------ Solution 2 using recduce --------------------
const greatestLetter2 = (arr) => {
  
  return arr.reduce( (str, word) => str += word.split("").sort().pop(), "");

}
greatestLetter2(exampleArray) // "suyrt"


//------------ Solution 3 using recursion --------------------

const greatestLetter3 = (arr, i, str) =>  {
  i = i || 0;
  str = str || "";
  str += arr[i].split("").sort().pop();
  
  //base case // recursive case
  return i === arr.length-1 ? str : greatestLetter(arr, i+1, str);

};
greatestLetter3(exampleArray) // "suyrt"