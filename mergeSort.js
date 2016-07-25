  //merge sort


  function mergeSortRec(array) {
    if(array.length === 1) {
      return array;
    }
    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  //helper for mergeSort cont.
  function merge(left, right) {
    let result = [];
    let iL = 0;
    let iR = 0;

    while(iL < left.length && iR < right.length) {
      if(left[iL] < right[iR]) {
        result.push(left[iL++]);
      } else {
        result.push(right[iR++]);
      }
    }

    while(iL < left.length) {
      result.push(left[iL++]);
    }

    while(iR < right.length) {
      result.push(right[iR++]);
    }

    return result;
  }
  
  mergeSortRec([8,7,6,5,4,3,2,1])