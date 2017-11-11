// Invert a Binary Tree
// Given a binary tree root node, invert the binary tree (mirror) and return back the root node.

// Input: 	  Node in a Binary Tree
// Output:  Node in a Binary Tree

// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(N)
// The binary tree node has the following properties:
// value : an integer
// leftChild : default null
// rightChild : default null
// Must swap the entire node instances, not just the value


function Tree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var tree1 = new Tree(1);
tree1.left = new Tree(2);
// tree1.left.left = new Tree(3);
// tree1.left.right = new Tree(6);
tree1.right = new Tree(3);
tree1.right.right = new Tree(5);
tree1.right.left = new Tree(4);


const invertBinaryTree = (tree) => {
  let curr = tree;
  if (!curr) return curr;

  let left = invertBinaryTree(curr.left);
  let right = invertBinaryTree(curr.right);

  let temp = left;
  curr.left = right;
  curr.right = temp;
  
  return tree;
}

console.log(invertBinaryTree(tree1))