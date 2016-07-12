
//Slower time complexity due to nested loops
Array.prototype.isSubsetOf = function (arr) {
  for (var i = 0; i < this.length; i++) {
    if (arr.indexOf(this[i]) === -1) {
      return false;
    } 
  }
  return true;
}


//Linear time complexity
Array.prototype.isSubsetOf2 = function (arr) {
  //transfer arr to object for speed
  var obj = {};
  
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = arr[i];
    }
    for (var j = 0; j < this.length; j++) {
      if(!obj[this[j]]) {
        return false;
      }
    }
    return true;
}

var b = ['merge', 'reset' ,'reset']

b.isSubsetOf2(['reset','merge','add','commit', 'reset']) // true 