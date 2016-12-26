// Search a given number in a sorted array that has been rotated by some arbitrary number. Return -1 if the number does not exist. Return true if found?

function searchRotatedArray(arr, target, start, end) {
  
  let mid = start + Math.floor((end-start)/2);
  
  //base case 
  if(start > end) return -1;
  if(arr[mid] === target) return mid;
  
  //keep first half where target lies in a rotation
  if(arr[start] < arr[mid] && target < arr[mid] && target >= arr[start]) {
    return searchRotatedArray(arr, target, start, mid-1)
  }
  
  //keep second half where target lies in a rotation
  if(arr[end] > arr[mid] && target > arr[mid] && target <= arr[end]) {
    return searchRotatedArray(arr, target, mid+1, end);
  } 
  
  //keep first half where 
  if(arr[start] > arr[mid]) {
    return searchRotatedArray(arr, target, start, mid-1);
  }
  
  //keep second half where
  if(arr[mid] > arr[end]) {
    return searchRotatedArray(arr, target, mid+1, end);
  } 
  return -1;
  

}

const arr = [176,188,199,200,210,222,1,10,20,47,59,63,75,88,99,107,120,133,155,162];
searchRotatedArray(arr, 99, 0, arr.length-1)