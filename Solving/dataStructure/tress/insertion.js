class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

let root = null;

function processData(input) {
  root = insert(root, input);
}

function insert(root, key) {
  if (root === null) {
    root = new Node(key);
    return root
  }
  if (root.data > key) {
    root.left = insert(root.left, key);
  } else if (root.data < key) {
    root.right = insert(root.right, key);
  }
  return root;
}

function inOrder(root) {
  console.log(root)
  if (root !== null) {
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
  }
}

processData(50);
processData(30);
processData(20);
processData(40);
processData(70);
processData(60);
processData(80);
inOrder(root);
