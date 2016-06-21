SumBinaryTree.js
// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!


// you'll need to create a binary tree constructor!
function binaryTree (value, left, right) {
  this.value = value || null;
  this.left = left || null;
  this.right = right || null;
}


function sumTree(binaryTree) {
  var sum = binaryTree.value || 0;
   if (binaryTree.left) {
    sum += sumTree(binaryTree.left);
   }
   if (binaryTree.right) {
    sum += sumTree(binaryTree.right);
   }

  return sum;
}






var tree = new binaryTree(6);
tree.left = new binaryTree(5);
tree.right = new binaryTree(6);
tree.left.left = new binaryTree(3);
tree.left.right = new binaryTree(4);
tree.right.left = new binaryTree(5);
tree.right.right = new binaryTree(8);

sumTree(tree);


   //   6
   // 5   6
   //3 4 5 8