//Given roots of two binary trees, determine if these trees are identical or not.

function isIdentical(tree1, tree2) {

  //base case, tree1 && tree2 are null, after check all of their values
  if (!tree1 && !tree2) return true;

  //or if one of the trees is null
  if (!tree1 || !tree2) return false;

  //if values match
  return tree1.val === tree2.val && isIdentical(tree1.left, tree2.left) && isIdentical(tree1.right, tree2.right);
}

function Tree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var tree1 = new Tree(100);
tree1.left = new Tree(50);
tree1.left.left = new Tree(25);
tree1.right = new Tree(200);
tree1.right.left = new Tree(125);
tree1.right.right = new Tree(350);

var tree2 = new Tree(100);
tree2.left = new Tree(50);
tree2.left.left = new Tree(25);
tree2.right = new Tree(200);
tree2.right.left = new Tree(125);
tree2.right.right = new Tree(350);

isIdentical(tree1, tree2)