// Given an array of integers, rotate the array by N elements. Here, N is an integer.

//time O(n) space/memory O(n) too many copies

function rotateArr1(arr, n) {
 if(n < 0) {
   return arr.splice(Math.abs(n)).concat(arr.slice(0, Math.abs(n)));
 } else {
   return arr.splice(-n).concat(arr.slice(0, arr.length));
 }
}

const arr = [1,10,20,0,59,86,32,11,9,40];

//rotateArr1(arr, -1) // [10,20,0,59,86,32,11,9,40,1];
//rotateArr1(arr, 2) // [9,40,10,20,0,59,86,32,11];


//time O(n) space/memory O(n)

function rotateArr1(arr, n) {
  
  //start loop at arr.length-n
  if(n > 0) {
    for (let i = arr.length-n; i < arr.length; i++) {
      arr.unshift(arr.pop(arr[i]));
    }
  } else {
    for (let j = 0; j < Math.abs(n); j++) {
      arr.push(arr.shift(arr[j]));
    }
  }
  return arr;
}



const arr1 = [1,10,20,0,59,86,32,11,9,40];

//rotateArr1(arr1, -3) // [10,20,0,59,86,32,11,9,40,1];
//rotateArr1(arr1, 4) // [9,40,10,20,0,59,86,32,11];



//rotating in place
function rotateInPlace(arr, start, end) {
  while(start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  
  return arr;
}

const arr2 = [1,10,20,0,59,86,32,11,9,40];
rotateInPlace(arr2, 0, arr.length-1);