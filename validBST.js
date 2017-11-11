/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */




// function validBST(tree) {
//   if(!tree) return true;

//   //at any given node, the value of all the nodes in its left tree must be <= its value
//   if(tree.left && tree.left.val > tree.val) return false;

//   //at any given node, the value of all the nodes in its right tree must be > its value
//   if(tree.right && tree.right.val <= tree.val) return false;

//   return validBST(tree.left) && validBST(tree.right);
// }


//BFS- good when the tree is really deep
// function validBST(tree) {
//   let queue = [tree];

//   while (queue.length) {
//     let currentNode = queue.shift();
//     if (currentNode.left) {
//       queue.push(currentNode.left)
//       if (currentNode.left.val > currentNode.val) return false;
//     }
//     if (currentNode.right) {
//       queue.push(currentNode.right)
//       if (currentNode.right && currentNode.right.val < currentNode.val) return false;
//     }
//   }
//   return true;
// }
const validBST = (tree, result) => {
  let curr = tree;

  if (curr === null) return;

  validBST(curr.left, result);
  
  result.push(curr.val)

  validBST(curr.right, result);

  let i = 0;

  while (i < result.length-1) {
    if (result[i+1] < result[i]) {
      return false;
    }
    i++;
  }
  return true;
}

function Tree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var tree1 = new Tree(10);
// tree1 = new Tree(10);
tree1.left = new Tree(5);
tree1.left.left = new Tree(3);
tree1.left.right = new Tree(6);
tree1.right = new Tree(64);

//tree1.left.right.right = new Tree(11);

// tree1.right.left = new Tree(15);
//tree1.left.right = new Tree(4);

// tree1.left.left.left = new Tree(4)

// tree1.right.right = new Tree(13);

console.log(validBST(tree1, []));