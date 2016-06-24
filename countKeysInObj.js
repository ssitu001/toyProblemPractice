countKeysInObj.js

//Write a function that counts the number of times a key occurs in an object.
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2

//with inner helper func
var countKeysInObj = function(obj, target) {
  var count = 0;
  var innerFunc = function(obj, target) {
    for (var key in obj) {
      if (key === target ) {
        count++;
      }
      if (typeof obj[key] === "object") {
        innerFunc(obj[key], target);
      }
    }
  };
  innerFunc(obj, target);
  return count;
};

//without inner helper func
var countKeysInObj = function(obj, target) {
  var count = 0;
    for (var key in obj) {
      if (key === target ) {
        count++;
      }
      if (typeof obj[key] === "object") {
        count += countKeysInObj(obj[key], target);
      }
    }
  return count;
};



var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};


countKeysInObj(testobj, 'r')