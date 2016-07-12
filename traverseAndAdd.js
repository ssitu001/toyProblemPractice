traverseAndAdd.js
// using recursion add the numbers inside a nested object

function traverseAndAdd(nodeTree) {
  var result = 0;
  function inner(nodeTree) {
    for (var value in nodeTree) {
      if (typeof nodeTree[value] === 'number') {
        result += nodeTree[value];
      } else {
        inner(nodeTree[value]);
      }
    }
  }
  inner(nodeTree);
  return result;
}




  var node = {
    value: 100,
    children1 : {value : 200},
    children2 : {value : 300, children3: {value: 400}}
  };

  traverseAndAdd(node);