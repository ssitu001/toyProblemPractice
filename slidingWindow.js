// Given a large array of integers and a window of size w, find current maximum in the window as the window slides through the entire array.
// Consider the array below and let's try to find all maximum with window size = 3.
//This approach has complexity O(nw).

function slidingWindow(arr, w) {
  let max = [];
  
  if(arr.length < w) return "window too large";
  
  for(let i = 0; i < arr.length; i++) {
    let sliced = arr.slice(i, w+i);
    if(sliced.length === w) {
      max.push(findMax(sliced));
    } else {
      return max;
    }
  }
  
}

function findMax(subArr) {
  let max = -Infinity;
  
  for (let i = 0; i < subArr.length; i++) {
    if(subArr[i] > max) {
      max = subArr[i];
    }
  }
  return max; 
}

//slidingWindow([-4,2,-5,3,6], 3)