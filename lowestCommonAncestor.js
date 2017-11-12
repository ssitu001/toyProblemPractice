// Lowest Common Ancestor
// Given the root node of a binary tree and two distinct values, find the lowest common ancestor.

// Input:     Root Node, Two Integer Values 
// Output:  Integer Value of Lowest Common Ancestor
// Example
// Input: root, 4, 9      	=>	Output: 7
	
// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(N)

// Integer values of nodes are all distinct.

function Tree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var tree1 = new Tree(5);
tree1.left = new Tree(2);
// tree1.left.left = new Tree(3);
// tree1.left.right = new Tree(6);
tree1.right = new Tree(7);
tree1.right.right = new Tree(8);
tree1.right.right.right = new Tree(9);
tree1.right.right.left = new Tree(11);
tree1.right.left = new Tree(4);

const lowestCommonAncestor = (tree, int1, int2) => {

  let pathForInt1 = BFS(tree, int1);
  let pathForInt2 = BFS(tree, int2);
  let lowestCommonAncestorSoFar = null;
  //find shortest path
  let i = 0;
  while (i < pathForInt1.length && i < pathForInt2.length) {
    lowestCommonAncestorSoFar = pathForInt1[i];
    i++;
  }

  return lowestCommonAncestorSoFar;
}

const BFS = (tree, int) => {
  let path = [];
  let curr = tree;
  let queue = [tree];

  while (queue.length) {
    let curr = queue.shift();

    if (curr.val === int) {
      return path;
    } else {
      path.push(curr.val);
    }

    if (curr.left) {
      queue.push(curr.left);
    }

    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return path;
}

console.log(lowestCommonAncestor(tree1, 4, 8))