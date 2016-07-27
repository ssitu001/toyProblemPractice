deepEquals.js

 /**
    * Write a function that, given two collections, returns whether or not the two
    * are deeply equivalent--meaning the structure of the two collections is the
    * same, and so is the structure of each of their corresponding descendants.
    *
    * Examples:
    *
    * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
    * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
    *
    * don't worry about handling cyclical object structures.
    *
    */
    
    
function deepEquals(colA, colB){
  //base case
  if (colA === colB) {
    return true;
  }
    
  if (colA === undefined || colB === undefined) {
    return false;
  }
  
  if (Object.keys(colA).length !== Object.keys(colB).length) {
    return false;
  }
  
  if (typeof colA !== "object" || typeof colB !== "object" ) {
    return false;
  }
  
  for (let key in colA) {
    if(!(key in colB)) {
      return false;
    } 
    if (!deepEquals(colA[key], colB[key])) {
      return false;
    }
    
  }
  return true;

}

//deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}});
//deepEquals({a:1, b: {c:3}});
//deepEquals({a:1}, {a:1});
//deepEquals({a:1}, {b:1});
deepEquals([1,2,3], [1,2,3])