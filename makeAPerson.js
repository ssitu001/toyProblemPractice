makeAPerson.js

var Person = function(firstAndLast) {
  var firstLast = firstAndLast;
  this.getFirstName = function () { var blah = firstLast.split(" "); return blah[0]; };
  this.getLastName = function () { var blah = firstLast.split(" "); return blah[1]; };
  this.setFirstName = function (firstName) { var blah = firstLast.split(" "); blah[0] = firstName; firstLast = blah.join(" "); return firstLast; };
  this.setLastName = function (lastName) { var blah = firstLast.split(" "); blah[1] = lastName; firstLast = blah.join(" "); return firstLast;  };
  this.setFullName = function (fullName) { firstLast = fullName; };
  this.getFullName = function() { return firstLast; };
};




var bob = new Person('Bob Ross');
// bob.setFirstName("Haskell")
// bob.getFullName();


//bob.getFullName() //should return "Haskell Ross" after 

//Object.keys(bob).length //6

// getFirstName()
bob.getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)