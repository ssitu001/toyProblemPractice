inventoryUpdate.js

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

let arrayCreator = obj => {
  let result = [];
  
  for (var key in obj) {
    result.push([obj[key], key]);
  }
  return result.sort( (a, b) => a[1] > b[1] );
}

const updateInventory = (arr1, arr2) => {
    // All inventory must be accounted for or you're fired!
    let obj = {};
    for ( var i = 0; i < arr1.length; i++ ) {
      obj[arr1[i][1]] = arr1[i][0];
    }
    for ( var j = 0; j < arr2.length; j++ ) {
      if(obj[arr2[j][1]]) {
        obj[arr2[j][1]] += arr2[j][0];
      } else {
        obj[arr2[j][1]] = arr2[j][0];
      }
    }
  return arrayCreator(obj);
}

