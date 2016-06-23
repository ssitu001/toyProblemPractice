//two_sums

// # Write a method that takes an array of numbers. If a pair of numbers
// # in the array sums to zero, return the positions of those two numbers.
// # If no pair of numbers sums to zero, return `nil`.
// #
// # Difficulty: medium.

function two_sum(nums) {
  var positions = [];
  
  for ( var i = 0; i < nums.length; i++ ) {
    //handles 2 zeros in array
    if (nums[i] === 0) {
      positions.push(i);
    }
    //check positive and negative variant
    else if (nums.indexOf(nums[i]) !== -1 && nums.indexOf(-nums[i]) !== -1) {
      positions.push(i);
    }

  }
  //check if anything stored 
  if (!positions.length) {
    return "nil";
  }
  return positions;
}

//input array of numbers

//output return index of a pair of numbers that sum to zero, if no pairs sum to zero return nil
two_sum([1, 3, 5, -3])