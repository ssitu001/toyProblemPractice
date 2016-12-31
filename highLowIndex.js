// Given a sorted array of integers, return the low and high index of the given key. Return -1 if not found. The array length can be in millions with lots of duplicates.


function highLowIndex(arr, target, start, end) {

    const indices = [];
    const mid = start + Math.floor((end-start)/2);
  
    if(arr[mid] === target) {
      //check both side to exit fast;
      if(arr[mid-1] !== target && arr[mid+1] !== target) {
        indices.push(mid);
        return indices;
      } 
      
      if(arr[mid-1] === target) {
        indices.push(binarySearch(arr, target, 0, mid, "left")) 
      } else {
        indices.push(mid);
      }
      
      if(arr[mid+1] === target) {
        indices.push(binarySearch(arr, target, mid+1, end, "right"));
      } else {
        indices.push(mid);
      }
      
    } else {
        if(arr[mid] < target) {
          //we only care about the right side
          return highLowIndex(arr, target, mid+1, end)
        } else {
          //we only care about the left side
          return highLowIndex(arr, target, 0, mid)
        }
    }
      
      
    return indices;  
      


}

function binarySearch(arr, target, start, end, direction) {
  const mid2 = start + Math.floor((end-start)/2)
  if(arr[mid2] === target) {
    if(direction === "right") {
      if(arr[mid2] === arr[mid2+1]) {
        return binarySearch(arr, target, mid2+1, end, "right");
      } else {
        return mid2;
      }
    } else {
        if(arr[mid2] === arr[mid2-1]) {
         return binarySearch(arr, target, 0, mid2-1, "left");
        } else {
          return mid2;
      }
    }
  }
}


const arr = [1,2,5,5,5,5,5,5,5,5,10];
highLowIndex(arr, 10, 0, arr.length-1);