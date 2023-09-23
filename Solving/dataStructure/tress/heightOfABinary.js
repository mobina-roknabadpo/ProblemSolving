class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

let root;

function treeHeight(node) {
  if (node === null) {
    return -1;
  } else {
    /* compute the depth of each subtree */
    let leftHeight = treeHeight(node.left);
    let rightHeight = treeHeight(node.right);
    console.log("lDepth", leftHeight, "rDepth", rightHeight);
    /* use the larger one */
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Height of tree is : " + treeHeight(root));
